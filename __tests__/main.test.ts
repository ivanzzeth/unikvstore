import * as sinon from "sinon";
import {
  // DropboxStorage,
  GoogleDriveStorage,
  IMultiStorage,
  IStorage,
  LocalStorage,
  MemoryStorage,
  MemoryStorageWrapper,
  MultiStorage,
} from "../src";
import { getRandomString } from "../src/utils";

const crypto = require('crypto');

Object.defineProperty(globalThis, 'crypto', {
  value: {
    getRandomValues: (arr: string | any[]) => crypto.randomBytes(arr.length)
  }
});

describe("IStorage", function () {
  let storage: IStorage;

  let localStorage: IStorage;
  let memoryStorage: IStorage;
  let multiStorage: IMultiStorage;

  describe("test storages with generaral cases", function () {
    it("LocalStorage", async function () {
      // Inject localStorage for simulating brower env.
      const NodeLocalStorage = require("node-localstorage").LocalStorage;
      const nodeLocalStorage = new NodeLocalStorage("./scratch-test-storage");

      storage = new LocalStorage(nodeLocalStorage);
      await test();

      // cleans up ./scratch created during doctest
      try {
        nodeLocalStorage._deleteLocation();
      } catch (e: any) {}
    });

    it("MemoryStorage", async function () {
      storage = new MemoryStorage();
      await test();
    });

    it("test multiStorage getInstance", async function () {
      storage = MultiStorage.getInstance();
      expect(MultiStorage.getInstance()).toEqual(storage);
    });

    it("test multiStorage with localStorage and memoryStorage", async function () {
      // Inject localStorage for simulating brower env.
      const NodeLocalStorage = require("node-localstorage").LocalStorage;
      const nodeLocalStorage = new NodeLocalStorage("./scratch-test-storage");

      const localStorage = new LocalStorage(nodeLocalStorage);
      storage = new MemoryStorageWrapper(localStorage);
      await test();

      // cleans up ./scratch created during doctest
      try {
        nodeLocalStorage._deleteLocation();
      } catch (e: any) {}
    });

    it("test GoogleDriveStorage when access token passed", async function () {
      const accessToken = process.env.DRIVE_ACCESS_TOKEN;
      console.log("googleDrive accessToken: ", accessToken);

      if (!accessToken) {
        return;
      }

      console.log("Run GoogleDriveStorage test..");
      storage = new GoogleDriveStorage(accessToken);
      // console.log("Run GoogleDriveStorage test done...", await storage.keys());
      await storage.clear();

      await test();
    });
  });

  describe("test multiStorages", function () {
    it("LocalStorage + MemoryStorage", async function () {
      localStorage = new MemoryStorage();
      memoryStorage = new MemoryStorage();
      multiStorage = new MultiStorage(localStorage);
      await testMultiStorage();
    });

    describe("tet MultiStorage with multi-devices", function () {
      let localStorage0: IStorage;
      let localStorage1: IStorage;
      let baseStorage: IStorage;
      let device0: IMultiStorage;
      let device1: IMultiStorage;
      beforeEach(function () {
        localStorage0 = new MemoryStorage();
        localStorage1 = new MemoryStorage();
        baseStorage = new MemoryStorage();

        // two multiStorage to simulate multi-devices
        device0 = new MultiStorage(baseStorage, localStorage0);
        device1 = new MultiStorage(baseStorage, localStorage1);
      });
      it("device0 is up to date and device1 is out of date, in the case, device1 should sync data from baseStorage instead of updating baseStorage", async function () {
        expect(await device0.keys()).toEqual(await device1.keys());
        // assert.deepEqual(await device0.keys(), );
      });
    });
  });

  async function test() {
    const key = getRandomString();
    const defaultValue = getRandomString();

    expect(await storage.contains(key)).toBe(false);
    expect(await storage.get(key, defaultValue)).toBe(defaultValue);
    try {
      await storage.get(key);
    } catch (e: any) {
      // assert.equal(e instanceof ErrorWrapper, true);
      // assert.equal(e.code == "STORAGE_CALL_FAILED", true);
      // assert.equal(e.data == KeyNotFound, true);
    }

    const value = getRandomString();
    await storage.set(key, value);
    expect(await storage.contains(key)).toBeTruthy();
    expect(await storage.get(key)).toBe(value);
    expect(await storage.keys()).toEqual([key]);

    await storage.delete(key);
    expect(await storage.contains(key)).toBeFalsy();
    expect(await storage.get(key, defaultValue)).toBe(defaultValue);

    const key2 = getRandomString();
    await storage.set(key2, value);
    expect(await storage.contains(key2)).toBeTruthy();
    await storage.clear();
    expect(await storage.contains(key2)).toBeFalsy();
    expect(await storage.get(key2, defaultValue)).toEqual(defaultValue);

    await storage.set(key2, value);
    await storage.set(key, value);
    expect((await storage.keys()).sort()).toEqual([key2, key].sort());

    await storage.clear();
  }

  async function testMultiStorage() {
    const key = getRandomString();
    const value = getRandomString();
    const defaultValue = getRandomString();

    // Set a value
    expect(multiStorage.size()).toEqual(0);
    await multiStorage.set(key, value);
    expect(await localStorage.get(key)).toEqual(value);
    expect(await memoryStorage.get(key, defaultValue)).toEqual(defaultValue);
    expect(await multiStorage.checkConsistency(key)).toBeTruthy();

    // Add a storage
    multiStorage.addStorage(memoryStorage);
    expect(multiStorage.size()).toEqual(1);
    expect(await multiStorage.checkConsistency(key)).toBeFalsy();

    // Check and sync
    await multiStorage.checkAndSync(key);
    expect(await localStorage.get(key, defaultValue)).toEqual(value);
    expect(await memoryStorage.get(key, defaultValue)).toEqual(value);

    // Update localStorage only to simulate data inconsistancy
    const value1 = getRandomString();
    await localStorage.set(key, value1);
    expect(await multiStorage.checkConsistency(key)).toBeFalsy();
    await multiStorage.sync(key, value1);
    expect(await multiStorage.checkConsistency(key)).toBeTruthy();

    const key2 = getRandomString();
    const value2 = getRandomString();

    const key3 = getRandomString();
    const value3 = getRandomString();

    // Test manually update base
    multiStorage.setUpdateBaseOnSet(false);
    await multiStorage.set(key2, value2);
    expect(await memoryStorage.get(key2)).toEqual(value2);
    expect(await localStorage.get(key2, defaultValue)).toEqual(defaultValue);

    await multiStorage.set(key3, value3);
    expect(await memoryStorage.get(key3)).toEqual(value3);
    expect(await localStorage.get(key3, defaultValue)).toEqual(defaultValue);

    await multiStorage.push(key2);
    expect(await localStorage.get(key2)).toEqual(value2);
    expect(await localStorage.get(key3, defaultValue)).toEqual(defaultValue);

    await multiStorage.push(key3);
    expect(await localStorage.get(key2)).toEqual(value2);
    expect(await localStorage.get(key3)).toEqual(value3);

    // Test update base in specified interval.
    console.log("sinon: ", sinon);
    const clock = sinon.useFakeTimers();
    const intervalId = multiStorage.startAutoPush();
    multiStorage.addAutoPushKey(key2);
    sinon
      .stub(multiStorage, "stopAutoPush")
      .callsFake(() => clock.clearInterval(intervalId as any));

    await multiStorage.clear();
    expect(await localStorage.get(key, defaultValue)).toEqual(defaultValue);
    expect(await localStorage.get(key2, defaultValue)).toEqual(defaultValue);
    expect(await localStorage.get(key3, defaultValue)).toEqual(defaultValue);

    await multiStorage.set(key2, value2);
    expect(await memoryStorage.get(key2)).toEqual(value2);
    expect(await localStorage.get(key2, defaultValue)).toEqual(defaultValue);

    console.log("Advanced time...");

    clock.next();
    clock.restore();

    await new Promise((resolve) => setTimeout(resolve, 100));
    expect(await localStorage.get(key2)).toEqual(value2);

    console.log("Stop auto push...");
    multiStorage.stopAutoPush();
  }
})