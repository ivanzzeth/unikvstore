[**unikvstore**](../README.md) • **Docs**

***

[unikvstore](../globals.md) / LocalStorage

# Class: LocalStorage

## Implements

- [`IStorage`](../interfaces/IStorage.md)

## Constructors

### new LocalStorage()

> **new LocalStorage**(`store`?): [`LocalStorage`](LocalStorage.md)

#### Parameters

• **store?**: `DomStorage`

#### Returns

[`LocalStorage`](LocalStorage.md)

#### Source

[localStorage.ts:11](https://github.com/ivanzzeth/unikvstore/blob/845c3ab29b210f471f813e2c89f72934b47de796/src/localStorage.ts#L11)

## Properties

### store

> `private` **store**: `DomStorage`

#### Source

[localStorage.ts:9](https://github.com/ivanzzeth/unikvstore/blob/845c3ab29b210f471f813e2c89f72934b47de796/src/localStorage.ts#L9)

## Methods

### addKey()

> `private` **addKey**(`key`): `void`

#### Parameters

• **key**: `string`

#### Returns

`void`

#### Source

[localStorage.ts:76](https://github.com/ivanzzeth/unikvstore/blob/845c3ab29b210f471f813e2c89f72934b47de796/src/localStorage.ts#L76)

***

### clear()

> **clear**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IStorage`](../interfaces/IStorage.md).[`clear`](../interfaces/IStorage.md#clear)

#### Source

[localStorage.ts:65](https://github.com/ivanzzeth/unikvstore/blob/845c3ab29b210f471f813e2c89f72934b47de796/src/localStorage.ts#L65)

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

[localStorage.ts:30](https://github.com/ivanzzeth/unikvstore/blob/845c3ab29b210f471f813e2c89f72934b47de796/src/localStorage.ts#L30)

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

[localStorage.ts:60](https://github.com/ivanzzeth/unikvstore/blob/845c3ab29b210f471f813e2c89f72934b47de796/src/localStorage.ts#L60)

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

[localStorage.ts:35](https://github.com/ivanzzeth/unikvstore/blob/845c3ab29b210f471f813e2c89f72934b47de796/src/localStorage.ts#L35)

***

### keys()

> **keys**(): `Promise`\<`string`[]\>

#### Returns

`Promise`\<`string`[]\>

#### Implementation of

[`IStorage`](../interfaces/IStorage.md).[`keys`](../interfaces/IStorage.md#keys)

#### Source

[localStorage.ts:24](https://github.com/ivanzzeth/unikvstore/blob/845c3ab29b210f471f813e2c89f72934b47de796/src/localStorage.ts#L24)

***

### removeKey()

> `private` **removeKey**(`key`): `void`

#### Parameters

• **key**: `string`

#### Returns

`void`

#### Source

[localStorage.ts:87](https://github.com/ivanzzeth/unikvstore/blob/845c3ab29b210f471f813e2c89f72934b47de796/src/localStorage.ts#L87)

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

[localStorage.ts:52](https://github.com/ivanzzeth/unikvstore/blob/845c3ab29b210f471f813e2c89f72934b47de796/src/localStorage.ts#L52)
