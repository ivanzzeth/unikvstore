[**unikvstore**](../README.md) • **Docs**

***

[unikvstore](../globals.md) / LocalStorageWrapper

# Class: LocalStorageWrapper

## Extends

- [`MultiStorage`](MultiStorage.md)

## Constructors

### new LocalStorageWrapper()

> **new LocalStorageWrapper**(`storage`): [`LocalStorageWrapper`](LocalStorageWrapper.md)

#### Parameters

• **storage**: [`IStorage`](../interfaces/IStorage.md)

#### Returns

[`LocalStorageWrapper`](LocalStorageWrapper.md)

#### Overrides

[`MultiStorage`](MultiStorage.md).[`constructor`](MultiStorage.md#constructors)

#### Source

[multiStorage.ts:262](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L262)

## Properties

### autoPushKeys

> **autoPushKeys**: `Set`\<`string`\>

#### Inherited from

[`MultiStorage`](MultiStorage.md).[`autoPushKeys`](MultiStorage.md#autopushkeys)

#### Source

[multiStorage.ts:16](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L16)

***

### noAwaitOnSet

> **noAwaitOnSet**: `boolean` = `false`

#### Inherited from

[`MultiStorage`](MultiStorage.md).[`noAwaitOnSet`](MultiStorage.md#noawaitonset)

#### Source

[multiStorage.ts:9](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L9)

***

### pushInterval

> **pushInterval**: `number`

#### Inherited from

[`MultiStorage`](MultiStorage.md).[`pushInterval`](MultiStorage.md#pushinterval)

#### Source

[multiStorage.ts:14](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L14)

***

### updateBaseOnSet

> **updateBaseOnSet**: `boolean` = `true`

#### Inherited from

[`MultiStorage`](MultiStorage.md).[`updateBaseOnSet`](MultiStorage.md#updatebaseonset)

#### Source

[multiStorage.ts:8](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L8)

## Methods

### addAutoPushKey()

> **addAutoPushKey**(`key`): `Promise`\<`void`\>

#### Parameters

• **key**: `string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`MultiStorage`](MultiStorage.md).[`addAutoPushKey`](MultiStorage.md#addautopushkey)

#### Source

[multiStorage.ts:47](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L47)

***

### addStorage()

> **addStorage**(...`items`): `void`

#### Parameters

• ...**items**: [`IStorage`](../interfaces/IStorage.md)[]

#### Returns

`void`

#### Inherited from

[`MultiStorage`](MultiStorage.md).[`addStorage`](MultiStorage.md#addstorage)

#### Source

[multiStorage.ts:92](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L92)

***

### checkAndSync()

> **checkAndSync**(`key`): `Promise`\<`void`\>

#### Parameters

• **key**: `string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`MultiStorage`](MultiStorage.md).[`checkAndSync`](MultiStorage.md#checkandsync)

#### Source

[multiStorage.ts:216](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L216)

***

### checkConsistency()

> **checkConsistency**(`key`): `Promise`\<`boolean`\>

#### Parameters

• **key**: `string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`MultiStorage`](MultiStorage.md).[`checkConsistency`](MultiStorage.md#checkconsistency)

#### Source

[multiStorage.ts:237](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L237)

***

### clear()

> **clear**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`MultiStorage`](MultiStorage.md).[`clear`](MultiStorage.md#clear)

#### Source

[multiStorage.ts:203](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L203)

***

### contains()

> **contains**(`key`): `Promise`\<`boolean`\>

#### Parameters

• **key**: `string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`MultiStorage`](MultiStorage.md).[`contains`](MultiStorage.md#contains)

#### Source

[multiStorage.ts:132](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L132)

***

### currentPushVersion()

> **currentPushVersion**(`key`): `number`

#### Parameters

• **key**: `string`

#### Returns

`number`

#### Inherited from

[`MultiStorage`](MultiStorage.md).[`currentPushVersion`](MultiStorage.md#currentpushversion)

#### Source

[multiStorage.ts:43](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L43)

***

### delete()

> **delete**(`key`): `Promise`\<`void`\>

#### Parameters

• **key**: `string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`MultiStorage`](MultiStorage.md).[`delete`](MultiStorage.md#delete)

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

#### Inherited from

[`MultiStorage`](MultiStorage.md).[`get`](MultiStorage.md#get)

#### Source

[multiStorage.ts:142](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L142)

***

### keys()

> **keys**(): `Promise`\<`string`[]\>

#### Returns

`Promise`\<`string`[]\>

#### Inherited from

[`MultiStorage`](MultiStorage.md).[`keys`](MultiStorage.md#keys)

#### Source

[multiStorage.ts:121](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L121)

***

### lastPushVersion()

> **lastPushVersion**(`key`): `number`

#### Parameters

• **key**: `string`

#### Returns

`number`

#### Inherited from

[`MultiStorage`](MultiStorage.md).[`lastPushVersion`](MultiStorage.md#lastpushversion)

#### Source

[multiStorage.ts:39](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L39)

***

### push()

> **push**(`key`): `Promise`\<`void`\>

#### Parameters

• **key**: `string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`MultiStorage`](MultiStorage.md).[`push`](MultiStorage.md#push)

#### Source

[multiStorage.ts:231](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L231)

***

### removeStorage()

> **removeStorage**(`index`): [`IStorage`](../interfaces/IStorage.md)

#### Parameters

• **index**: `number`

#### Returns

[`IStorage`](../interfaces/IStorage.md)

#### Inherited from

[`MultiStorage`](MultiStorage.md).[`removeStorage`](MultiStorage.md#removestorage)

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

#### Inherited from

[`MultiStorage`](MultiStorage.md).[`set`](MultiStorage.md#set)

#### Source

[multiStorage.ts:161](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L161)

***

### setBase()

> **setBase**(`base`): `void`

#### Parameters

• **base**: [`IStorage`](../interfaces/IStorage.md)

#### Returns

`void`

#### Inherited from

[`MultiStorage`](MultiStorage.md).[`setBase`](MultiStorage.md#setbase)

#### Source

[multiStorage.ts:35](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L35)

***

### setErrHandler()

> **setErrHandler**(`handler`): `void`

#### Parameters

• **handler**

#### Returns

`void`

#### Inherited from

[`MultiStorage`](MultiStorage.md).[`setErrHandler`](MultiStorage.md#seterrhandler)

#### Source

[multiStorage.ts:51](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L51)

***

### setNoAwaitOnSet()

> **setNoAwaitOnSet**(`noAwait`): `void`

#### Parameters

• **noAwait**: `boolean`

#### Returns

`void`

#### Inherited from

[`MultiStorage`](MultiStorage.md).[`setNoAwaitOnSet`](MultiStorage.md#setnoawaitonset)

#### Source

[multiStorage.ts:55](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L55)

***

### setPushInterval()

> **setPushInterval**(`pushInterval`): `void`

#### Parameters

• **pushInterval**: `number`

#### Returns

`void`

#### Inherited from

[`MultiStorage`](MultiStorage.md).[`setPushInterval`](MultiStorage.md#setpushinterval)

#### Source

[multiStorage.ts:208](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L208)

***

### setUpdateBaseOnSet()

> **setUpdateBaseOnSet**(`updateBaseOnSet`): `void`

#### Parameters

• **updateBaseOnSet**: `boolean`

#### Returns

`void`

#### Inherited from

[`MultiStorage`](MultiStorage.md).[`setUpdateBaseOnSet`](MultiStorage.md#setupdatebaseonset)

#### Source

[multiStorage.ts:212](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L212)

***

### size()

> **size**(): `number`

#### Returns

`number`

#### Inherited from

[`MultiStorage`](MultiStorage.md).[`size`](MultiStorage.md#size)

#### Source

[multiStorage.ts:117](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L117)

***

### startAutoPush()

> **startAutoPush**(): `Timeout`

#### Returns

`Timeout`

#### Inherited from

[`MultiStorage`](MultiStorage.md).[`startAutoPush`](MultiStorage.md#startautopush)

#### Source

[multiStorage.ts:59](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L59)

***

### stopAutoPush()

> **stopAutoPush**(): `void`

#### Returns

`void`

#### Inherited from

[`MultiStorage`](MultiStorage.md).[`stopAutoPush`](MultiStorage.md#stopautopush)

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

#### Inherited from

[`MultiStorage`](MultiStorage.md).[`sync`](MultiStorage.md#sync)

#### Source

[multiStorage.ts:223](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L223)

***

### getInstance()

> `static` **getInstance**(): [`IMultiStorage`](../interfaces/IMultiStorage.md)

#### Returns

[`IMultiStorage`](../interfaces/IMultiStorage.md)

#### Inherited from

[`MultiStorage`](MultiStorage.md).[`getInstance`](MultiStorage.md#getinstance)

#### Source

[multiStorage.ts:27](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/multiStorage.ts#L27)
