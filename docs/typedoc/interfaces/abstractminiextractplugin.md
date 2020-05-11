[mini-extract-plugin](../README.md) › [AbstractMiniExtractPlugin](abstractminiextractplugin.md)

# Interface: AbstractMiniExtractPlugin <**T, Params**>

Abstract interface of MiniExtractPlugin instance.

This interface omits properties that cause circular reference, which are:
- `hooks`

Following types of classes can be overriden by passing an object of types as
the first type parameter:
- `dependencyClass` - DependencyClass subtype
- `dependencyTemplateClass` - DependencyTemplateClass subtype
- `moduleClass` - ModuleClass subtype
- `moduleFactoryClass` - ModuleFactoryClass subtype
- `constructorOptions` - object type expected when instantiating MiniExtractPlugin;

**`example`** 
// ClassOptions with default types
ClassOptions
// ClassOptions with overriden moduleClass type
ClassOptions<{
  moduleClass: ModCls;
}>
// ClassOptions with all types overriden
ClassOptions<{
  dependencyClass: DepCls;
  dependencyTemplateClass: DepTemplateCls;
  moduleClass: ModCls;
  moduleFactoryClass: ModFactoryCls;
  constructorOptions: ConstructorOptions & { myCustomOption: boolean};
}>

## Type parameters

▪ **T**: *[ParamsDefault](paramsdefault.md)*

▪ **Params**: *[ParamsParse](../README.md#paramsparse)‹T›*

## Hierarchy

* Ploadin

  ↳ **AbstractMiniExtractPlugin**

  ↳ [MiniExtractPlugin](miniextractplugin.md)

## Implements

* Ploadin

## Index

### Constructors

* [constructor](abstractminiextractplugin.md#constructor)

### Properties

* [apply](abstractminiextractplugin.md#apply)
* [classOptions](abstractminiextractplugin.md#classoptions)
* [hooks](abstractminiextractplugin.md#hooks)
* [options](abstractminiextractplugin.md#options)

### Accessors

* [_classId](abstractminiextractplugin.md#_classid)
* [_instanceId](abstractminiextractplugin.md#_instanceid)
* [asLoader](abstractminiextractplugin.md#asloader)
* [_classId](abstractminiextractplugin.md#static-_classid)
* [asLoader](abstractminiextractplugin.md#static-asloader)

### Methods

* [loader](abstractminiextractplugin.md#loader)
* [pitch](abstractminiextractplugin.md#pitch)

## Constructors

###  constructor

\+ **new AbstractMiniExtractPlugin**(): *[AbstractMiniExtractPlugin](abstractminiextractplugin.md)*

*Inherited from [AbstractMiniExtractPlugin](abstractminiextractplugin.md).[constructor](abstractminiextractplugin.md#constructor)*

Defined in node_modules/ploadin/dist/ploadin.d.ts:2

**Returns:** *[AbstractMiniExtractPlugin](abstractminiextractplugin.md)*

## Properties

###  apply

• **apply**: *function*

*Defined in [src/types/subclassing-abstract.ts:94](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/subclassing-abstract.ts#L94)*

#### Type declaration:

▸ (`c`: Compiler): *void*

**Parameters:**

Name | Type |
------ | ------ |
`c` | Compiler |

___

###  classOptions

• **classOptions**: *Required‹[AbstractClassOptions](abstractclassoptions.md)‹Params››*

*Overrides void*

*Defined in [src/types/subclassing-abstract.ts:91](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/subclassing-abstract.ts#L91)*

___

###  hooks

• **hooks**: *object*

*Defined in [src/types/subclassing-abstract.ts:93](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/subclassing-abstract.ts#L93)*

#### Type declaration:

* \[ **key**: *string*\]: Hook

___

###  options

• **options**: *Params["constructorOptions"]*

*Defined in [src/types/subclassing-abstract.ts:92](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/subclassing-abstract.ts#L92)*

## Accessors

###  _classId

• **get _classId**(): *ClassId*

*Inherited from [AbstractMiniExtractPlugin](abstractminiextractplugin.md).[_classId](abstractminiextractplugin.md#static-_classid)*

Defined in node_modules/ploadin/dist/ploadin.d.ts:6

**Returns:** *ClassId*

___

###  _instanceId

• **get _instanceId**(): *InstanceId*

*Inherited from [AbstractMiniExtractPlugin](abstractminiextractplugin.md).[_instanceId](abstractminiextractplugin.md#_instanceid)*

Defined in node_modules/ploadin/dist/ploadin.d.ts:4

**Returns:** *InstanceId*

___

###  asLoader

• **get asLoader**(): *object*

*Inherited from [AbstractMiniExtractPlugin](abstractminiextractplugin.md).[asLoader](abstractminiextractplugin.md#static-asloader)*

Defined in node_modules/ploadin/dist/ploadin.d.ts:14

**Returns:** *object*

* **loader**: *string*

* **query**(): *object*

  * **classId**: *number | undefined*

  * **instanceId**: *number | undefined*

___

### `Static` _classId

• **get _classId**(): *ClassId*

*Inherited from [AbstractMiniExtractPlugin](abstractminiextractplugin.md).[_classId](abstractminiextractplugin.md#static-_classid)*

Defined in node_modules/ploadin/dist/ploadin.d.ts:5

**Returns:** *ClassId*

___

### `Static` asLoader

• **get asLoader**(): *object*

*Inherited from [AbstractMiniExtractPlugin](abstractminiextractplugin.md).[asLoader](abstractminiextractplugin.md#static-asloader)*

Defined in node_modules/ploadin/dist/ploadin.d.ts:7

**Returns:** *object*

* **loader**: *string*

* **query**(): *object*

  * **classId**: *number | undefined*

  * **instanceId**: *undefined*

## Methods

###  loader

▸ **loader**(`loaderContext`: any, `source?`: undefined | string, `sourceMap?`: undefined | string, `data?`: any): *void*

*Defined in [src/types/subclassing-abstract.ts:95](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/subclassing-abstract.ts#L95)*

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

*Defined in [src/types/subclassing-abstract.ts:101](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/subclassing-abstract.ts#L101)*

**Parameters:**

Name | Type |
------ | ------ |
`loaderContext` | any |
`request` | string |
`precedingRequest` | string |
`data` | object |

**Returns:** *void*
