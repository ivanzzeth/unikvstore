[**unikvstore**](../README.md) • **Docs**

***

[unikvstore](../globals.md) / GoogleDriveStorage

# Class: GoogleDriveStorage

## Implements

- [`IStorage`](../interfaces/IStorage.md)

## Constructors

### new GoogleDriveStorage()

> **new GoogleDriveStorage**(`accessToken`): [`GoogleDriveStorage`](GoogleDriveStorage.md)

#### Parameters

• **accessToken**: `string`

#### Returns

[`GoogleDriveStorage`](GoogleDriveStorage.md)

#### Source

[google/storage.ts:8](https://github.com/ivanzzeth/unikvstore/blob/54b2706fbc60fe20fe598fb250438833fd5def64/src/google/storage.ts#L8)

## Properties

### drive

> **drive**: `GoogleDrive`

#### Source

[google/storage.ts:6](https://github.com/ivanzzeth/unikvstore/blob/54b2706fbc60fe20fe598fb250438833fd5def64/src/google/storage.ts#L6)

## Methods

### clear()

> **clear**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IStorage`](../interfaces/IStorage.md).[`clear`](../interfaces/IStorage.md#clear)

#### Source

[google/storage.ts:70](https://github.com/ivanzzeth/unikvstore/blob/54b2706fbc60fe20fe598fb250438833fd5def64/src/google/storage.ts#L70)

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

[google/storage.ts:17](https://github.com/ivanzzeth/unikvstore/blob/54b2706fbc60fe20fe598fb250438833fd5def64/src/google/storage.ts#L17)

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

[google/storage.ts:62](https://github.com/ivanzzeth/unikvstore/blob/54b2706fbc60fe20fe598fb250438833fd5def64/src/google/storage.ts#L62)

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

[google/storage.ts:23](https://github.com/ivanzzeth/unikvstore/blob/54b2706fbc60fe20fe598fb250438833fd5def64/src/google/storage.ts#L23)

***

### getFileId()

> `private` **getFileId**(`key`): `Promise`\<`string`\>

#### Parameters

• **key**: `string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Source

[google/storage.ts:78](https://github.com/ivanzzeth/unikvstore/blob/54b2706fbc60fe20fe598fb250438833fd5def64/src/google/storage.ts#L78)

***

### keys()

> **keys**(): `Promise`\<`string`[]\>

#### Returns

`Promise`\<`string`[]\>

#### Implementation of

[`IStorage`](../interfaces/IStorage.md).[`keys`](../interfaces/IStorage.md#keys)

#### Source

[google/storage.ts:12](https://github.com/ivanzzeth/unikvstore/blob/54b2706fbc60fe20fe598fb250438833fd5def64/src/google/storage.ts#L12)

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

[google/storage.ts:44](https://github.com/ivanzzeth/unikvstore/blob/54b2706fbc60fe20fe598fb250438833fd5def64/src/google/storage.ts#L44)
