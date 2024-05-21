[**unikvstore**](../README.md) • **Docs**

***

[unikvstore](../globals.md) / IStorage

# Interface: IStorage

## Extended by

- [`IMultiStorage`](IMultiStorage.md)

## Methods

### clear()

> **clear**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[index.ts:22](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/index.ts#L22)

***

### contains()

> **contains**(`key`): `Promise`\<`boolean`\>

#### Parameters

• **key**: `string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<`boolean`\>

#### Source

[index.ts:5](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/index.ts#L5)

***

### delete()

> **delete**(`key`): `Promise`\<`void`\>

#### Parameters

• **key**: `string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<`void`\>

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

#### Source

[index.ts:10](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/index.ts#L10)

***

### keys()

> **keys**(): `Promise`\<`string`[]\>

#### Returns

`Promise`\<`string`[]\>

#### Source

[index.ts:2](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/index.ts#L2)

***

### set()

> **set**(`key`, `value`): `Promise`\<`void`\>

#### Parameters

• **key**: `string` \| `Promise`\<`string`\>

• **value**: `string` \| `Promise`\<`string`\>

#### Returns

`Promise`\<`void`\>

#### Source

[index.ts:15](https://github.com/ivanzzeth/unikvstore/blob/ded448b173c4ac89d45562b4f890825c214942ea/src/index.ts#L15)
