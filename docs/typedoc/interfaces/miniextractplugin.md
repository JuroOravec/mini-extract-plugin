[mini-extract-plugin](../README.md) › [MiniExtractPlugin](miniextractplugin.md)

# Interface: MiniExtractPlugin

## Hierarchy

* Ploadin

  ↳ **MiniExtractPlugin**

## Implements

* Ploadin

## Index

### Constructors

* [constructor](miniextractplugin.md#constructor)

### Properties

* [apply](miniextractplugin.md#apply)
* [classOptions](miniextractplugin.md#classoptions)
* [hooks](miniextractplugin.md#hooks)
* [options](miniextractplugin.md#options)

### Accessors

* [_classId](miniextractplugin.md#_classid)
* [_instanceId](miniextractplugin.md#_instanceid)
* [asLoader](miniextractplugin.md#asloader)
* [_classId](miniextractplugin.md#static-_classid)
* [asLoader](miniextractplugin.md#static-asloader)

### Methods

* [loader](miniextractplugin.md#loader)
* [pitch](miniextractplugin.md#pitch)

## Constructors

###  constructor

\+ **new MiniExtractPlugin**(): *[MiniExtractPlugin](miniextractplugin.md)*

*Inherited from [MiniExtractPlugin](miniextractplugin.md).[constructor](miniextractplugin.md#constructor)*

Defined in node_modules/ploadin/dist/ploadin.d.ts:2

**Returns:** *[MiniExtractPlugin](miniextractplugin.md)*

## Properties

###  apply

• **apply**: *function*

*Defined in [src/types/subclassing.ts:74](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/subclassing.ts#L74)*

#### Type declaration:

▸ (`c`: theWebpack.Compiler): *void*

**Parameters:**

Name | Type |
------ | ------ |
`c` | theWebpack.Compiler |

___

###  classOptions

• **classOptions**: *Required‹[ClassOptions](classoptions.md)›*

*Overrides void*

*Defined in [src/types/subclassing.ts:71](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/subclassing.ts#L71)*

___

###  hooks

• **hooks**: *[ActiveHooks](../README.md#activehooks)*

*Defined in [src/types/subclassing.ts:73](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/subclassing.ts#L73)*

___

###  options

• **options**: *[ConstructorOptions](../README.md#constructoroptions)*

*Defined in [src/types/subclassing.ts:72](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/subclassing.ts#L72)*

## Accessors

###  _classId

• **get _classId**(): *ClassId*

*Inherited from [MiniExtractPlugin](miniextractplugin.md).[_classId](miniextractplugin.md#static-_classid)*

Defined in node_modules/ploadin/dist/ploadin.d.ts:6

**Returns:** *ClassId*

___

###  _instanceId

• **get _instanceId**(): *InstanceId*

*Inherited from [MiniExtractPlugin](miniextractplugin.md).[_instanceId](miniextractplugin.md#_instanceid)*

Defined in node_modules/ploadin/dist/ploadin.d.ts:4

**Returns:** *InstanceId*

___

###  asLoader

• **get asLoader**(): *object*

*Inherited from [MiniExtractPlugin](miniextractplugin.md).[asLoader](miniextractplugin.md#static-asloader)*

Defined in node_modules/ploadin/dist/ploadin.d.ts:14

**Returns:** *object*

* **loader**: *string*

* **query**(): *object*

  * **classId**: *number | undefined*

  * **instanceId**: *number | undefined*

___

### `Static` _classId

• **get _classId**(): *ClassId*

*Inherited from [MiniExtractPlugin](miniextractplugin.md).[_classId](miniextractplugin.md#static-_classid)*

Defined in node_modules/ploadin/dist/ploadin.d.ts:5

**Returns:** *ClassId*

___

### `Static` asLoader

• **get asLoader**(): *object*

*Inherited from [MiniExtractPlugin](miniextractplugin.md).[asLoader](miniextractplugin.md#static-asloader)*

Defined in node_modules/ploadin/dist/ploadin.d.ts:7

**Returns:** *object*

* **loader**: *string*

* **query**(): *object*

  * **classId**: *number | undefined*

  * **instanceId**: *undefined*

## Methods

###  loader

▸ **loader**(`loaderContext`: any, `source?`: undefined | string, `sourceMap?`: undefined | string, `data?`: any): *void*

*Defined in [src/types/subclassing.ts:75](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/subclassing.ts#L75)*

**Parameters:**

Name | Type |
------ | ------ |
`loaderContext` | any |
`source?` | undefined &#124; string |
`sourceMap?` | undefined &#124; string |
`data?` | any |

**Returns:** *void*

___

###  pitch

▸ **pitch**(`loaderContext`: any, `request`: string, `precedingRequest`: string, `data`: object): *void*

*Defined in [src/types/subclassing.ts:81](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/subclassing.ts#L81)*

**Parameters:**

Name | Type |
------ | ------ |
`loaderContext` | any |
`request` | string |
`precedingRequest` | string |
`data` | object |

**Returns:** *void*
