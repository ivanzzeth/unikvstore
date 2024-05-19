import { IStorage } from '.';
import { KeyNotFound } from './errors';

const LOCAL_STORAGE_KEY = 'LocalStorage_Keys';

export class LocalStorage implements IStorage {
  private store: Storage;

  constructor(store: Storage = localStorage) {
    this.store = store;
  }

  async keys(): Promise<string[]> {
    return JSON.parse(
      this.store.getItem(LOCAL_STORAGE_KEY) || '[]'
    ) as Array<string>;
  }

  async contains(key: string | Promise<string>): Promise<boolean> {
    const content = this.store.getItem(await key);
    return !!content && content.length != 0;
  }

  async get(
    key: string | Promise<string>,
    defaultValue?: string | Promise<string>
  ): Promise<string> {
    if (defaultValue) {
      defaultValue = await defaultValue;
    }
    const content = this.store.getItem(await key);
    if (!content || content.length == 0) {
      if (defaultValue) {
        return defaultValue;
      }
      throw KeyNotFound;
    }
    return content;
  }

  async set(
    key: string | Promise<string>,
    value: string | Promise<string>
  ): Promise<void> {
    this.addKey(await key);
    return this.store.setItem(await key, await value);
  }

  async delete(key: string | Promise<string>): Promise<void> {
    this.removeKey(await key);
    return this.store.removeItem(await key);
  }

  async clear(): Promise<void> {
    const keys = await this.keys();
    this.store.removeItem(LOCAL_STORAGE_KEY);
    // should not use this for clearing storage
    // return this.store.clear();

    for (const key of keys) {
      this.store.removeItem(key);
    }
  }

  private addKey(key: string) {
    const keys = JSON.parse(
      this.store.getItem(LOCAL_STORAGE_KEY) || '[]'
    ) as Array<string>;
    if (keys.indexOf(key) >= 0) {
      return;
    }
    keys.push(key);
    this.store.setItem(LOCAL_STORAGE_KEY, JSON.stringify(keys));
  }

  private removeKey(key: string) {
    const keys = JSON.parse(
      this.store.getItem(LOCAL_STORAGE_KEY) || '[]'
    ) as Array<string>;
    const index = keys.indexOf(key);
    if (index >= 0) {
      keys[index] = keys[keys.length - 1]!;
      keys.pop();
    }
    this.store.setItem(LOCAL_STORAGE_KEY, JSON.stringify(keys));
  }
}
