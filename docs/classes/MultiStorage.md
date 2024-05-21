[**unikvstore**](../README.md) • **Docs**

***

[unikvstore](../globals.md) / MultiStorage

# Class: MultiStorage

## Extended by

- [`MemoryStorageWrapper`](MemoryStorageWrapper.md)
- [`LocalStorageWrapper`](LocalStorageWrapper.md)

## Implements

- [`IMultiStorage`](../interfaces/IMultiStorage.md)

## Constructors

### new MultiStorage()

> **new MultiStorage**(`base`, ...`extras`): [`MultiStorage`](MultiStorage.md)

#### Parameters

• **base**: [`IStorage`](../interfaces/IStorage.md)

• ...**extras**: [`IStorage`](../interfaces/IStorage.md)[]

#### Returns

[`MultiStorage`](MultiStorage.md)

#### Source

[multiStorage.ts:19](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L19)

## Properties

### autoPushKeys

> **autoPushKeys**: `Set`\<`string`\>

#### Implementation of

[`IMultiStorage`](../interfaces/IMultiStorage.md).[`autoPushKeys`](../interfaces/IMultiStorage.md#autopushkeys)

#### Source

[multiStorage.ts:16](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L16)

***

### base

> `private` **base**: [`IStorage`](../interfaces/IStorage.md)

#### Source

[multiStorage.ts:6](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L6)

***

### currentPushVersionMap

> `private` **currentPushVersionMap**: `Map`\<`string`, `number`\>

#### Source

[multiStorage.ts:12](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L12)

***

### errHandler()?

> `private` `optional` **errHandler**: (`e`) => `void`

#### Parameters

• **e**: `any`

#### Returns

`void`

#### Source

[multiStorage.ts:10](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L10)

***

### intervalId?

> `private` `optional` **intervalId**: `Timeout`

#### Source

[multiStorage.ts:15](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L15)

***

### lastPushVersionMap

> `private` **lastPushVersionMap**: `Map`\<`string`, `number`\>

#### Source

[multiStorage.ts:11](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L11)

***

### noAwaitOnSet

> **noAwaitOnSet**: `boolean` = `false`

#### Implementation of

[`IMultiStorage`](../interfaces/IMultiStorage.md).[`noAwaitOnSet`](../interfaces/IMultiStorage.md#noawaitonset)

#### Source

[multiStorage.ts:9](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L9)

***

### pushInterval

> **pushInterval**: `number`

#### Implementation of

[`IMultiStorage`](../interfaces/IMultiStorage.md).[`pushInterval`](../interfaces/IMultiStorage.md#pushinterval)

#### Source

[multiStorage.ts:14](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L14)

***

### stores

> `private` **stores**: [`IStorage`](../interfaces/IStorage.md)[]

#### Source

[multiStorage.ts:7](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L7)

***

### updateBaseOnSet

> **updateBaseOnSet**: `boolean` = `true`

#### Implementation of

[`IMultiStorage`](../interfaces/IMultiStorage.md).[`updateBaseOnSet`](../interfaces/IMultiStorage.md#updatebaseonset)

#### Source

[multiStorage.ts:8](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L8)

***

### instance

> `static` `private` **instance**: [`IMultiStorage`](../interfaces/IMultiStorage.md)

#### Source

[multiStorage.ts:5](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L5)

## Methods

### addAutoPushKey()

> **addAutoPushKey**(`key`): `Promise`\<`void`\>

#### Parameters

• **key**: `string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IMultiStorage`](../interfaces/IMultiStorage.md).[`addAutoPushKey`](../interfaces/IMultiStorage.md#addautopushkey)

#### Source

[multiStorage.ts:47](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L47)

***

### addStorage()

> **addStorage**(...`items`): `void`

#### Parameters

• ...**items**: [`IStorage`](../interfaces/IStorage.md)[]

#### Returns

`void`

#### Implementation of

[`IMultiStorage`](../interfaces/IMultiStorage.md).[`addStorage`](../interfaces/IMultiStorage.md#addstorage)

#### Source

[multiStorage.ts:92](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L92)

***

### checkAndSync()

> **checkAndSync**(`key`): `Promise`\<`void`\>

#### Parameters

• **key**: `string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IMultiStorage`](../interfaces/IMultiStorage.md).[`checkAndSync`](../interfaces/IMultiStorage.md#checkandsync)

#### Source

[multiStorage.ts:216](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L216)

***

### checkConsistency()

> **checkConsistency**(`key`): `Promise`\<`boolean`\>

#### Parameters

• **key**: `string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IMultiStorage`](../interfaces/IMultiStorage.md).[`checkConsistency`](../interfaces/IMultiStorage.md#checkconsistency)

#### Source

[multiStorage.ts:237](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L237)

***

### clear()

> **clear**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IMultiStorage`](../interfaces/IMultiStorage.md).[`clear`](../interfaces/IMultiStorage.md#clear)

#### Source

[multiStorage.ts:203](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L203)

***

### contains()

> **contains**(`key`): `Promise`\<`boolean`\>

#### Parameters

• **key**: `string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IMultiStorage`](../interfaces/IMultiStorage.md).[`contains`](../interfaces/IMultiStorage.md#contains)

#### Source

[multiStorage.ts:132](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L132)

***

### currentPushVersion()

> **currentPushVersion**(`key`): `number`

#### Parameters

• **key**: `string`

#### Returns

`number`

#### Implementation of

[`IMultiStorage`](../interfaces/IMultiStorage.md).[`currentPushVersion`](../interfaces/IMultiStorage.md#currentpushversion)

#### Source

[multiStorage.ts:43](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L43)

***

### delete()

> **delete**(`key`): `Promise`\<`void`\>

#### Parameters

• **key**: `string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IMultiStorage`](../interfaces/IMultiStorage.md).[`delete`](../interfaces/IMultiStorage.md#delete)

#### Source

[multiStorage.ts:197](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L197)

***

### get()

> **get**(`key`, `defaultValue`?): `Promise`\<`string`\>

#### Parameters

• **key**: `string` \| `Promise`\<`string`\>

• **defaultValue?**: `string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Implementation of

[`IMultiStorage`](../interfaces/IMultiStorage.md).[`get`](../interfaces/IMultiStorage.md#get)

#### Source

[multiStorage.ts:142](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L142)

***

### keys()

> **keys**(): `Promise`\<`string`[]\>

#### Returns

`Promise`\<`string`[]\>

#### Implementation of

[`IMultiStorage`](../interfaces/IMultiStorage.md).[`keys`](../interfaces/IMultiStorage.md#keys)

#### Source

[multiStorage.ts:121](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L121)

***

### lastPushVersion()

> **lastPushVersion**(`key`): `number`

#### Parameters

• **key**: `string`

#### Returns

`number`

#### Implementation of

[`IMultiStorage`](../interfaces/IMultiStorage.md).[`lastPushVersion`](../interfaces/IMultiStorage.md#lastpushversion)

#### Source

[multiStorage.ts:39](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L39)

***

### push()

> **push**(`key`): `Promise`\<`void`\>

#### Parameters

• **key**: `string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IMultiStorage`](../interfaces/IMultiStorage.md).[`push`](../interfaces/IMultiStorage.md#push)

#### Source

[multiStorage.ts:231](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L231)

***

### removeStorage()

> **removeStorage**(`index`): [`IStorage`](../interfaces/IStorage.md)

#### Parameters

• **index**: `number`

#### Returns

[`IStorage`](../interfaces/IStorage.md)

#### Implementation of

[`IMultiStorage`](../interfaces/IMultiStorage.md).[`removeStorage`](../interfaces/IMultiStorage.md#removestorage)

#### Source

[multiStorage.ts:96](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L96)

***

### set()

> **set**(`key`, `value`): `Promise`\<`void`\>

#### Parameters

• **key**: `string` \| `Promise`\<`string`\>

• **value**: `string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IMultiStorage`](../interfaces/IMultiStorage.md).[`set`](../interfaces/IMultiStorage.md#set)

#### Source

[multiStorage.ts:161](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L161)

***

### setBase()

> **setBase**(`base`): `void`

#### Parameters

• **base**: [`IStorage`](../interfaces/IStorage.md)

#### Returns

`void`

#### Implementation of

[`IMultiStorage`](../interfaces/IMultiStorage.md).[`setBase`](../interfaces/IMultiStorage.md#setbase)

#### Source

[multiStorage.ts:35](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L35)

***

### setErrHandler()

> **setErrHandler**(`handler`): `void`

#### Parameters

• **handler**

#### Returns

`void`

#### Implementation of

[`IMultiStorage`](../interfaces/IMultiStorage.md).[`setErrHandler`](../interfaces/IMultiStorage.md#seterrhandler)

#### Source

[multiStorage.ts:51](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L51)

***

### setNoAwaitOnSet()

> **setNoAwaitOnSet**(`noAwait`): `void`

#### Parameters

• **noAwait**: `boolean`

#### Returns

`void`

#### Implementation of

[`IMultiStorage`](../interfaces/IMultiStorage.md).[`setNoAwaitOnSet`](../interfaces/IMultiStorage.md#setnoawaitonset)

#### Source

[multiStorage.ts:55](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L55)

***

### setPushInterval()

> **setPushInterval**(`pushInterval`): `void`

#### Parameters

• **pushInterval**: `number`

#### Returns

`void`

#### Implementation of

[`IMultiStorage`](../interfaces/IMultiStorage.md).[`setPushInterval`](../interfaces/IMultiStorage.md#setpushinterval)

#### Source

[multiStorage.ts:208](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L208)

***

### setUpdateBaseOnSet()

> **setUpdateBaseOnSet**(`updateBaseOnSet`): `void`

#### Parameters

• **updateBaseOnSet**: `boolean`

#### Returns

`void`

#### Implementation of

[`IMultiStorage`](../interfaces/IMultiStorage.md).[`setUpdateBaseOnSet`](../interfaces/IMultiStorage.md#setupdatebaseonset)

#### Source

[multiStorage.ts:212](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L212)

***

### size()

> **size**(): `number`

#### Returns

`number`

#### Implementation of

[`IMultiStorage`](../interfaces/IMultiStorage.md).[`size`](../interfaces/IMultiStorage.md#size)

#### Source

[multiStorage.ts:117](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L117)

***

### startAutoPush()

> **startAutoPush**(): `Timeout`

#### Returns

`Timeout`

#### Implementation of

[`IMultiStorage`](../interfaces/IMultiStorage.md).[`startAutoPush`](../interfaces/IMultiStorage.md#startautopush)

#### Source

[multiStorage.ts:59](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L59)

***

### stopAutoPush()

> **stopAutoPush**(): `void`

#### Returns

`void`

#### Implementation of

[`IMultiStorage`](../interfaces/IMultiStorage.md).[`stopAutoPush`](../interfaces/IMultiStorage.md#stopautopush)

#### Source

[multiStorage.ts:88](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L88)

***

### sync()

> **sync**(`key`, `value`): `Promise`\<`void`\>

#### Parameters

• **key**: `string` \| `Promise`\<`string`\>

• **value**: `string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IMultiStorage`](../interfaces/IMultiStorage.md).[`sync`](../interfaces/IMultiStorage.md#sync)

#### Source

[multiStorage.ts:223](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L223)

***

### getInstance()

> `static` **getInstance**(): [`IMultiStorage`](../interfaces/IMultiStorage.md)

#### Returns

[`IMultiStorage`](../interfaces/IMultiStorage.md)

#### Source

[multiStorage.ts:27](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L27)
