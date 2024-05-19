import { IStorage } from '.';
import { KeyNotFound } from './errors';

export class MemoryStorage implements IStorage {
  private store: Map<string, string>;

  constructor() {
    this.store = new Map();
  }

  async keys(): Promise<string[]> {
    return Array.from(this.store.keys());
  }

  async contains(key: string | Promise<string>): Promise<boolean> {
    return this.store.has(await key);
  }

  async get(
    key: string | Promise<string>,
    defaultValue?: string | Promise<string>
  ): Promise<string> {
    if (defaultValue) {
      defaultValue = await defaultValue;
    }
    const content = this.store.get(await key);
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
    this.store.set(await key, await value);
  }

  async delete(key: string | Promise<string>): Promise<void> {
    this.store.delete(await key);
  }

  async clear(): Promise<void> {
    this.store.clear();
  }
}
