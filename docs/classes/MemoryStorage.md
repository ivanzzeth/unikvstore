[**unikvstore**](../README.md) • **Docs**

***

[unikvstore](../globals.md) / MemoryStorage

# Class: MemoryStorage

## Implements

- [`IStorage`](../interfaces/IStorage.md)

## Constructors

### new MemoryStorage()

> **new MemoryStorage**(): [`MemoryStorage`](MemoryStorage.md)

#### Returns

[`MemoryStorage`](MemoryStorage.md)

#### Source

[memoryStorage.ts:7](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/memoryStorage.ts#L7)

## Properties

### store

> `private` **store**: `Map`\<`string`, `string`\>

#### Source

[memoryStorage.ts:5](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/memoryStorage.ts#L5)

## Methods

### clear()

> **clear**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IStorage`](../interfaces/IStorage.md).[`clear`](../interfaces/IStorage.md#clear)

#### Source

[memoryStorage.ts:47](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/memoryStorage.ts#L47)

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

[memoryStorage.ts:15](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/memoryStorage.ts#L15)

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

[memoryStorage.ts:43](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/memoryStorage.ts#L43)

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

[memoryStorage.ts:19](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/memoryStorage.ts#L19)

***

### keys()

> **keys**(): `Promise`\<`string`[]\>

#### Returns

`Promise`\<`string`[]\>

#### Implementation of

[`IStorage`](../interfaces/IStorage.md).[`keys`](../interfaces/IStorage.md#keys)

#### Source

[memoryStorage.ts:11](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/memoryStorage.ts#L11)

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

[memoryStorage.ts:36](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/memoryStorage.ts#L36)
