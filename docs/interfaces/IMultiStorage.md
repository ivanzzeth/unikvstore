[**unikvstore**](../README.md) • **Docs**

***

[unikvstore](../globals.md) / IMultiStorage

# Interface: IMultiStorage

## Extends

- [`IStorage`](IStorage.md)

## Properties

### autoPushKeys

> `readonly` **autoPushKeys**: `Set`\<`string`\>

#### Source

[index.ts:32](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/index.ts#L32)

***

### noAwaitOnSet

> `readonly` **noAwaitOnSet**: `boolean`

#### Source

[index.ts:30](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/index.ts#L30)

***

### pushInterval

> `readonly` **pushInterval**: `number`

#### Source

[index.ts:26](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/index.ts#L26)

***

### updateBaseOnSet

> `readonly` **updateBaseOnSet**: `boolean`

#### Source

[index.ts:28](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/index.ts#L28)

## Methods

### addAutoPushKey()

> **addAutoPushKey**(`key`): `Promise`\<`void`\>

#### Parameters

• **key**: `string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<`void`\>

#### Source

[index.ts:46](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/index.ts#L46)

***

### addStorage()

> **addStorage**(`storage`): `void`

#### Parameters

• **storage**: [`IStorage`](IStorage.md)

#### Returns

`void`

#### Source

[index.ts:38](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/index.ts#L38)

***

### checkAndSync()

> **checkAndSync**(`key`): `Promise`\<`void`\>

#### Parameters

• **key**: `string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<`void`\>

#### Source

[index.ts:50](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/index.ts#L50)

***

### checkConsistency()

> **checkConsistency**(`key`): `Promise`\<`boolean`\>

#### Parameters

• **key**: `string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<`boolean`\>

#### Source

[index.ts:58](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/index.ts#L58)

***

### clear()

> **clear**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IStorage`](IStorage.md).[`clear`](IStorage.md#clear)

#### Source

[index.ts:22](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/index.ts#L22)

***

### contains()

> **contains**(`key`): `Promise`\<`boolean`\>

#### Parameters

• **key**: `string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`IStorage`](IStorage.md).[`contains`](IStorage.md#contains)

#### Source

[index.ts:5](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/index.ts#L5)

***

### currentPushVersion()

> **currentPushVersion**(`key`): `number`

#### Parameters

• **key**: `string`

#### Returns

`number`

#### Source

[index.ts:45](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/index.ts#L45)

***

### delete()

> **delete**(`key`): `Promise`\<`void`\>

#### Parameters

• **key**: `string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IStorage`](IStorage.md).[`delete`](IStorage.md#delete)

#### Source

[index.ts:20](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/index.ts#L20)

***

### get()

> **get**(`key`, `defaultValue`?): `Promise`\<`string`\>

#### Parameters

• **key**: `string` \| `Promise`\<`string`\>

• **defaultValue?**: `string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Inherited from

[`IStorage`](IStorage.md).[`get`](IStorage.md#get)

#### Source

[index.ts:10](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/index.ts#L10)

***

### keys()

> **keys**(): `Promise`\<`string`[]\>

#### Returns

`Promise`\<`string`[]\>

#### Inherited from

[`IStorage`](IStorage.md).[`keys`](IStorage.md#keys)

#### Source

[index.ts:2](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/index.ts#L2)

***

### lastPushVersion()

> **lastPushVersion**(`key`): `number`

#### Parameters

• **key**: `string`

#### Returns

`number`

#### Source

[index.ts:44](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/index.ts#L44)

***

### push()

> **push**(`key`): `Promise`\<`void`\>

#### Parameters

• **key**: `string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<`void`\>

#### Source

[index.ts:52](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/index.ts#L52)

***

### removeStorage()

> **removeStorage**(`index`): [`IStorage`](IStorage.md)

#### Parameters

• **index**: `number`

#### Returns

[`IStorage`](IStorage.md)

#### Source

[index.ts:39](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/index.ts#L39)

***

### set()

> **set**(`key`, `value`): `Promise`\<`void`\>

#### Parameters

• **key**: `string` \| `Promise`\<`string`\>

• **value**: `string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IStorage`](IStorage.md).[`set`](IStorage.md#set)

#### Source

[index.ts:15](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/index.ts#L15)

***

### setBase()

> **setBase**(`base`): `void`

#### Parameters

• **base**: [`IStorage`](IStorage.md)

#### Returns

`void`

#### Source

[index.ts:33](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/index.ts#L33)

***

### setErrHandler()

> **setErrHandler**(`handler`): `void`

#### Parameters

• **handler**

#### Returns

`void`

#### Source

[index.ts:36](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/index.ts#L36)

***

### setNoAwaitOnSet()

> **setNoAwaitOnSet**(`noAwait`): `void`

#### Parameters

• **noAwait**: `boolean`

#### Returns

`void`

#### Source

[index.ts:37](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/index.ts#L37)

***

### setPushInterval()

> **setPushInterval**(`pushInterval`): `void`

#### Parameters

• **pushInterval**: `number`

#### Returns

`void`

#### Source

[index.ts:42](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/index.ts#L42)

***

### setUpdateBaseOnSet()

> **setUpdateBaseOnSet**(`updateBaseOnSet`): `void`

#### Parameters

• **updateBaseOnSet**: `boolean`

#### Returns

`void`

#### Source

[index.ts:43](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/index.ts#L43)

***

### size()

> **size**(): `number`

#### Returns

`number`

#### Source

[index.ts:41](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/index.ts#L41)

***

### startAutoPush()

> **startAutoPush**(): `Timeout`

#### Returns

`Timeout`

#### Source

[index.ts:48](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/index.ts#L48)

***

### stopAutoPush()

> **stopAutoPush**(): `void`

#### Returns

`void`

#### Source

[index.ts:49](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/index.ts#L49)

***

### sync()

> **sync**(`key`, `value`): `Promise`\<`void`\>

#### Parameters

• **key**: `string` \| `Promise`\<`string`\>

• **value**: `string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<`void`\>

#### Source

[index.ts:54](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/index.ts#L54)
