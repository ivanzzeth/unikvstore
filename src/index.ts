export interface IStorage {
  keys(): Promise<string[]>;

  // Returns whether the key exists.
  contains(key: string | Promise<string>): Promise<boolean>;
  // Returns the value given the key.
  // If key not found
  // a. not specifying defaultValue, throw `KeyNotFound` error.
  // b. otherwise returns defaultValue.
  get(
    key: string | Promise<string>,
    defaultValue?: string | Promise<string>
  ): Promise<string>;
  // Sets the value for given key.
  set(
    key: string | Promise<string>,
    value: string | Promise<string>
  ): Promise<void>;

  delete(key: string | Promise<string>): Promise<void>;

  clear(): Promise<void>;
}

export interface IMultiStorage extends IStorage {
  readonly pushInterval: number;
  // set base storage only if updateBaseOnSet is true.
  readonly updateBaseOnSet: boolean;
  // Skip await on set base storage if true.
  readonly noAwaitOnSet: boolean;
  // only the key existing in autoPushKeys will auto push.
  readonly autoPushKeys: Set<string>;
  setBase(base: IStorage): void;
  // ErrHandler for setting base storage.
  // Both works in `set` and `startAutoPush`.
  setErrHandler(handler: (e: any) => void): void;
  setNoAwaitOnSet(noAwait: boolean): void;
  addStorage(storage: IStorage): void;
  removeStorage(index: number): IStorage;
  // size of extra storages
  size(): number;
  setPushInterval(pushInterval: number): void;
  setUpdateBaseOnSet(updateBaseOnSet: boolean): void;
  lastPushVersion(key: string): number;
  currentPushVersion(key: string): number;
  addAutoPushKey(key: string | Promise<string>): Promise<void>;
  // Setup a timer to push key changes to base storage according to autoPushKeys.
  startAutoPush(): NodeJS.Timeout;
  stopAutoPush(): void;
  checkAndSync(key: string | Promise<string>): Promise<void>;
  // Push the change against the value of key to base storage
  push(key: string | Promise<string>): Promise<void>;
  // Sync content into extra storages
  sync(
    key: string | Promise<string>,
    value: string | Promise<string>
  ): Promise<void>;
  checkConsistency(key: string | Promise<string>): Promise<boolean>;
}

export type StorageWrapper = (storage: IStorage) => IStorage;

export { GoogleDriveStorage } from "./google";
export { DropboxStorage } from "./dropbox";
export { LocalStorage } from './localStorage.js';
export { MemoryStorage } from './memoryStorage.js';

export {
  MultiStorage,
  MemoryStorageWrapper,
  LocalStorageWrapper,
} from './multiStorage.js';
