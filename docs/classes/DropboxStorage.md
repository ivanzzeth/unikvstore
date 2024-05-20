[**unikvstore**](../README.md) • **Docs**

***

[unikvstore](../globals.md) / DropboxStorage

# Class: DropboxStorage

## Implements

- [`IStorage`](../interfaces/IStorage.md)

## Constructors

### new DropboxStorage()

> **new DropboxStorage**(`accessToken`): [`DropboxStorage`](DropboxStorage.md)

#### Parameters

• **accessToken**: `string`

#### Returns

[`DropboxStorage`](DropboxStorage.md)

#### Source

[dropbox/storage.ts:8](https://github.com/ivanzzeth/unikvstore/blob/845c3ab29b210f471f813e2c89f72934b47de796/src/dropbox/storage.ts#L8)

## Properties

### dbx

> **dbx**: `Dropbox`

#### Source

[dropbox/storage.ts:6](https://github.com/ivanzzeth/unikvstore/blob/845c3ab29b210f471f813e2c89f72934b47de796/src/dropbox/storage.ts#L6)

## Methods

### clear()

> **clear**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IStorage`](../interfaces/IStorage.md).[`clear`](../interfaces/IStorage.md#clear)

#### Source

[dropbox/storage.ts:94](https://github.com/ivanzzeth/unikvstore/blob/845c3ab29b210f471f813e2c89f72934b47de796/src/dropbox/storage.ts#L94)

***

### contains()

> **contains**(`key`): `Promise`\<`boolean`\>

#### Parameters

• **key**: `string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IStorage`](../interfaces/IStorage.md).[`contains`](../interfaces/IStorage.md#contains)

#### Source

[dropbox/storage.ts:21](https://github.com/ivanzzeth/unikvstore/blob/845c3ab29b210f471f813e2c89f72934b47de796/src/dropbox/storage.ts#L21)

***

### delete()

> **delete**(`key`): `Promise`\<`void`\>

#### Parameters

• **key**: `string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IStorage`](../interfaces/IStorage.md).[`delete`](../interfaces/IStorage.md#delete)

#### Source

[dropbox/storage.ts:88](https://github.com/ivanzzeth/unikvstore/blob/845c3ab29b210f471f813e2c89f72934b47de796/src/dropbox/storage.ts#L88)

***

### get()

> **get**(`key`, `defaultValue`?): `Promise`\<`string`\>

#### Parameters

• **key**: `string` \| `Promise`\<`string`\>

• **defaultValue?**: `string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Implementation of

[`IStorage`](../interfaces/IStorage.md).[`get`](../interfaces/IStorage.md#get)

#### Source

[dropbox/storage.ts:29](https://github.com/ivanzzeth/unikvstore/blob/845c3ab29b210f471f813e2c89f72934b47de796/src/dropbox/storage.ts#L29)

***

### getFileContent()

> `private` **getFileContent**(`filename`): `Promise`\<`string`\>

#### Parameters

• **filename**: `string`

#### Returns

`Promise`\<`string`\>

#### Source

[dropbox/storage.ts:116](https://github.com/ivanzzeth/unikvstore/blob/845c3ab29b210f471f813e2c89f72934b47de796/src/dropbox/storage.ts#L116)

***

### key2Filename()

> `private` **key2Filename**(`key`): `string`

#### Parameters

• **key**: `string`

#### Returns

`string`

#### Source

[dropbox/storage.ts:146](https://github.com/ivanzzeth/unikvstore/blob/845c3ab29b210f471f813e2c89f72934b47de796/src/dropbox/storage.ts#L146)

***

### keys()

> **keys**(): `Promise`\<`string`[]\>

#### Returns

`Promise`\<`string`[]\>

#### Implementation of

[`IStorage`](../interfaces/IStorage.md).[`keys`](../interfaces/IStorage.md#keys)

#### Source

[dropbox/storage.ts:14](https://github.com/ivanzzeth/unikvstore/blob/845c3ab29b210f471f813e2c89f72934b47de796/src/dropbox/storage.ts#L14)

***

### set()

> **set**(`key`, `value`): `Promise`\<`void`\>

#### Parameters

• **key**: `string` \| `Promise`\<`string`\>

• **value**: `string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IStorage`](../interfaces/IStorage.md).[`set`](../interfaces/IStorage.md#set)

#### Source

[dropbox/storage.ts:48](https://github.com/ivanzzeth/unikvstore/blob/845c3ab29b210f471f813e2c89f72934b47de796/src/dropbox/storage.ts#L48)
