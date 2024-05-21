**unikvstore** • [**Docs**](globals.md)

***

# unikvstore

[![npm package][npm-img]][npm-url]
[![Build Status][build-img]][build-url]
[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]
[![Code Coverage][codecov-img]][codecov-url]
[![Commitizen Friendly][commitizen-img]][commitizen-url]
[![Semantic Release][semantic-release-img]][semantic-release-url]

> A utility library for managing storages through a simple key-value pair storage interface, including localStorage, google drive, dropbox, etc.

## Install

```bash
npm install unikvstore
```

## Usage

Use MemoryStorage:

```ts
import { MemoryStorage, IStorage } from "unikvstore";

async function main() {
    const storage: IStorage = new MemoryStorage();

    await storage.set("key", "value");
    console.log("get: ", await storage.get("key"));
    console.log("contains: ", await storage.contains("key"));
}

main();
```

Use DropboxStorage:

```ts
import { DropboxStorage, IStorage } from "unikvstore";

async function main() {
    const accessToken = process.env.DROPBOX_ACCESS_TOKEN;
    console.log("dropbox accessToken: ", accessToken);
    const storage: IStorage = new DropboxStorage(accessToken);

    await storage.set("key", "value");
    console.log("get: ", await storage.get("key"));
    console.log("contains: ", await storage.contains("key"));

    await storage.clear();

    console.log("contains after clearing: ", await storage.contains("key"));
}

main();
```

Use GoogleDriveStorage:

```ts
import { GoogleDriveStorage, IStorage } from "unikvstore";

async function main() {
    const accessToken = process.env.GOOGLE_DRIVE_ACCESS_TOKEN;
    console.log("google drive accessToken: ", accessToken);
    const storage: IStorage = new GoogleDriveStorage(accessToken);

    await storage.set("key", "value");
    console.log("get: ", await storage.get("key"));
    console.log("contains: ", await storage.contains("key"));

    await storage.clear();

    console.log("contains after clearing: ", await storage.contains("key"));
}

main();
```

## Interface

For more details about interface to see [this](./docs/globals.md).

Core interface:

```ts
interface IStorage {
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
```

[build-img]:https://github.com/ryansonshine/typescript-npm-package-template/actions/workflows/release.yml/badge.svg
[build-url]:https://github.com/ryansonshine/typescript-npm-package-template/actions/workflows/release.yml
[downloads-img]:https://img.shields.io/npm/dt/typescript-npm-package-template
[downloads-url]:https://www.npmtrends.com/typescript-npm-package-template
[npm-img]:https://img.shields.io/npm/v/typescript-npm-package-template
[npm-url]:https://www.npmjs.com/package/typescript-npm-package-template
[issues-img]:https://img.shields.io/github/issues/ryansonshine/typescript-npm-package-template
[issues-url]:https://github.com/ryansonshine/typescript-npm-package-template/issues
[codecov-img]:https://codecov.io/gh/ryansonshine/typescript-npm-package-template/branch/main/graph/badge.svg
[codecov-url]:https://codecov.io/gh/ryansonshine/typescript-npm-package-template
[semantic-release-img]:https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]:https://github.com/semantic-release/semantic-release
[commitizen-img]:https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]:http://commitizen.github.io/cz-cli/
