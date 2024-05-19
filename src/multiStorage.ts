import { IMultiStorage, IStorage, LocalStorage } from '.';
import { MemoryStorage } from './memoryStorage';

export class MultiStorage implements IMultiStorage {
  private static instance: IMultiStorage;
  private base: IStorage;
  private stores: Array<IStorage>;
  updateBaseOnSet = true;
  noAwaitOnSet = false;
  private errHandler?: (e: any) => void;
  private lastPushVersionMap: Map<string, number>;
  private currentPushVersionMap: Map<string, number>;

  pushInterval = 5 * 60 * 1000;
  private intervalId?: NodeJS.Timeout;
  autoPushKeys: Set<string> = new Set();

  // Assume extras will never throw exceptions.
  constructor(base: IStorage, ...extras: IStorage[]) {
    this.base = base;
    this.stores = new Array<IStorage>(...extras);
    this.lastPushVersionMap = new Map<string, number>();
    this.currentPushVersionMap = new Map<string, number>();
    // this.intervalId = this.startAutoPush();
  }

  public static getInstance(): IMultiStorage {
    if (!MultiStorage.instance) {
      MultiStorage.instance = new MultiStorage(new MemoryStorage());
    }

    return MultiStorage.instance;
  }

  setBase(base: IStorage): void {
    this.base = base;
  }

  lastPushVersion(key: string): number {
    return this.lastPushVersionMap.get(key) || 0;
  }

  currentPushVersion(key: string): number {
    return this.currentPushVersionMap.get(key) || 0;
  }

  async addAutoPushKey(key: string | Promise<string>): Promise<void> {
    this.autoPushKeys.add(await key);
  }

  setErrHandler(handler: (e: any) => void) {
    this.errHandler = handler;
  }

  setNoAwaitOnSet(noAwait: boolean) {
    this.noAwaitOnSet = noAwait;
  }

  startAutoPush() {
    this.updateBaseOnSet = false;

    const intervalId = setInterval(() => {
      console.log('trying auto push...');
      for (const key of this.autoPushKeys) {
        if (this.lastPushVersion(key) == this.currentPushVersion(key)) {
          return;
        }
        console.log(`auto push key: ${key}...`);

        this.push(key)
          .then(() => {
            this.lastPushVersionMap.set(key, this.currentPushVersion(key));
          })
          .catch((e: any) => {
            console.warn('Failed to push changes to base storage: ', e);
            if (this.errHandler) {
              this.errHandler(e);
            }
          });
      }
    }, this.pushInterval);

    this.intervalId = intervalId;

    return intervalId;
  }

  stopAutoPush() {
    clearInterval(this.intervalId);
  }

  addStorage(...items: IStorage[]) {
    this.stores.push(...items);
  }

  removeStorage(index: number): IStorage {
    if (index < 0 || index >= this.stores.length) {
      throw new Error('out of range');
    }

    let ret: IStorage;
    if (index == 0) {
      ret = this.stores[0]!;
      this.stores = this.stores.slice(1);
    } else if (index == this.stores.length - 1) {
      ret = this.stores.pop()!;
    } else {
      ret = this.stores[index]!;
      const newStores = this.stores.slice(0, index);
      newStores.push(...this.stores.slice(index + 1));
      this.stores = newStores;
    }

    return ret;
  }

  size(): number {
    return this.stores.length;
  }

  async keys(): Promise<string[]> {
    for (const storage of this.stores) {
      const res = await storage.keys();
      if (res && res.length > 0) {
        return res;
      }
    }

    return this.base.keys();
  }

  async contains(key: string | Promise<string>): Promise<boolean> {
    for (const storage of this.stores) {
      if (await storage.contains(key)) {
        return true;
      }
    }

    return this.base.contains(key);
  }

  async get(
    key: string | Promise<string>,
    defaultValue?: string | Promise<string>
  ): Promise<string> {
    for (const i in this.stores) {
      const storage = this.stores[i]!;
      if (await storage.contains(key)) {
        console.log(`hit extra storages ${i}`);
        return storage.get(key, defaultValue);
      }
    }
    const content = await this.base.get(key, defaultValue);

    // Sync content into extra storages
    await this.sync(key, content);

    return content;
  }

  async set(
    key: string | Promise<string>,
    value: string | Promise<string>
  ): Promise<void> {
    key = await key;
    value = await value;
    console.log('MultiStorage set', key, this.updateBaseOnSet);
    this.currentPushVersionMap.set(key, this.currentPushVersion(key) + 1);

    if (this.updateBaseOnSet) {
      const setPromise = this.base
        .set(key, value)
        .catch(e => {
          console.warn('Failed to set base storage: ', e);
          if (this.errHandler) {
            this.errHandler(e);
          }
        })
        .then(() => {
          this.lastPushVersionMap.set(
            key as string,
            this.currentPushVersion(key as string)
          );
        });

      if (!this.noAwaitOnSet) {
        console.log('await set baseStorage: ', this.noAwaitOnSet);
        await setPromise;
      }
    }

    // Assume extras will never throw exceptions.
    // So they are called after calling base successful.
    await this.sync(key, value);
  }

  async delete(key: string | Promise<string>): Promise<void> {
    await this.base.delete(key);

    await Promise.all(this.stores.map(store => store.delete(key)));
  }

  async clear(): Promise<void> {
    await this.base.clear();
    await Promise.all(this.stores.map(store => store.clear()));
  }

  setPushInterval(pushInterval: number): void {
    this.pushInterval = pushInterval;
  }

  setUpdateBaseOnSet(updateBaseOnSet: boolean): void {
    this.updateBaseOnSet = updateBaseOnSet;
  }

  async checkAndSync(key: string | Promise<string>): Promise<void> {
    if (!(await this.checkConsistency(key))) {
      const content = await this.base.get(key, '');
      await this.sync(key, content);
    }
  }

  async sync(
    key: string | Promise<string>,
    value: string | Promise<string>
  ): Promise<void> {
    console.log('Update all extra storages...');
    await Promise.all(this.stores.map(store => store.set(key, value)));
  }

  async push(key: string | Promise<string>): Promise<void> {
    if (await this.contains(key)) {
      await this.base.set(key, await this.get(key));
    }
  }

  async checkConsistency(key: string | Promise<string>): Promise<boolean> {
    // Set defaultValue to storage.get to avoid KeyNotFound error.
    const defaultValue = 'MAGIC_DEFAULT_VALUE';
    const tmp = new Array(...this.stores);
    tmp.push(this.base);
    const values = await Promise.all(
      tmp.map(store => store.get(key, defaultValue))
    );
    if (values.length > 0) {
      return values.reduce((prev, curr) => {
        return prev && curr == values[0];
      }, true);
    }

    return true;
  }
}

export class MemoryStorageWrapper extends MultiStorage {
  constructor(storage: IStorage) {
    super(storage, new MemoryStorage());
  }
}

export class LocalStorageWrapper extends MultiStorage {
  constructor(storage: IStorage) {
    super(storage, new LocalStorage());
  }
}
