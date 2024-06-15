[**unikvstore**](../README.md) • **Docs**

***

[unikvstore](../globals.md) / LocalFileStorage

# Class: LocalFileStorage

## Extends

- [`LocalStorage`](LocalStorage.md)

## Implements

- [`IStorage`](../interfaces/IStorage.md)

## Constructors

### new LocalFileStorage()

> **new LocalFileStorage**(`filePath`): [`LocalFileStorage`](LocalFileStorage.md)

#### Parameters

• **filePath**: `string`

#### Returns

[`LocalFileStorage`](LocalFileStorage.md)

#### Overrides

[`LocalStorage`](LocalStorage.md).[`constructor`](LocalStorage.md#constructors)

#### Source

localFileStorage.ts:6

## Properties

### nodeStorage

> **nodeStorage**: `any`

#### Source

localFileStorage.ts:4

## Methods

### clear()

> **clear**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IStorage`](../interfaces/IStorage.md).[`clear`](../interfaces/IStorage.md#clear)

#### Inherited from

[`LocalStorage`](LocalStorage.md).[`clear`](LocalStorage.md#clear)

#### Source

[localStorage.ts:65](https://github.com/ivanzzeth/unikvstore/blob/54b2706fbc60fe20fe598fb250438833fd5def64/src/localStorage.ts#L65)

***

### contains()

> **contains**(`key`): `Promise`\<`boolean`\>

#### Parameters

• **key**: `string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IStorage`](../interfaces/IStorage.md).[`contains`](../interfaces/IStorage.md#contains)

#### Inherited from

[`LocalStorage`](LocalStorage.md).[`contains`](LocalStorage.md#contains)

#### Source

[localStorage.ts:30](https://github.com/ivanzzeth/unikvstore/blob/54b2706fbc60fe20fe598fb250438833fd5def64/src/localStorage.ts#L30)

***

### delete()

> **delete**(`key`): `Promise`\<`void`\>

#### Parameters

• **key**: `string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IStorage`](../interfaces/IStorage.md).[`delete`](../interfaces/IStorage.md#delete)

#### Inherited from

[`LocalStorage`](LocalStorage.md).[`delete`](LocalStorage.md#delete)

#### Source

[localStorage.ts:60](https://github.com/ivanzzeth/unikvstore/blob/54b2706fbc60fe20fe598fb250438833fd5def64/src/localStorage.ts#L60)

***

### deleteLocalFile()

> **deleteLocalFile**(): `void`

#### Returns

`void`

#### Source

localFileStorage.ts:15

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

#### Inherited from

[`LocalStorage`](LocalStorage.md).[`get`](LocalStorage.md#get)

#### Source

[localStorage.ts:35](https://github.com/ivanzzeth/unikvstore/blob/54b2706fbc60fe20fe598fb250438833fd5def64/src/localStorage.ts#L35)

***

### keys()

> **keys**(): `Promise`\<`string`[]\>

#### Returns

`Promise`\<`string`[]\>

#### Implementation of

[`IStorage`](../interfaces/IStorage.md).[`keys`](../interfaces/IStorage.md#keys)

#### Inherited from

[`LocalStorage`](LocalStorage.md).[`keys`](LocalStorage.md#keys)

#### Source

[localStorage.ts:24](https://github.com/ivanzzeth/unikvstore/blob/54b2706fbc60fe20fe598fb250438833fd5def64/src/localStorage.ts#L24)

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

#### Inherited from

[`LocalStorage`](LocalStorage.md).[`set`](LocalStorage.md#set)

#### Source

[localStorage.ts:52](https://github.com/ivanzzeth/unikvstore/blob/54b2706fbc60fe20fe598fb250438833fd5def64/src/localStorage.ts#L52)
