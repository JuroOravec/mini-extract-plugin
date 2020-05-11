[mini-extract-plugin](../README.md) › [MiniExtractPlugin](miniextractplugin.md)

# Interface: MiniExtractPlugin <**T, I, Params**>

MiniExtractPlugin instance

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

▪ **I**: *[AbstractMiniExtractPlugin](abstractminiextractplugin.md)‹T›*

▪ **Params**: *[ParamsParse](../README.md#paramsparse)‹T›*

## Hierarchy

  ↳ [AbstractMiniExtractPlugin](abstractminiextractplugin.md)‹T›

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

*Inherited from [AbstractMiniExtractPlugin](abstractminiextractplugin.md).[constructor](abstractminiextractplugin.md#constructor)*

Defined in node_modules/ploadin/dist/ploadin.d.ts:2

**Returns:** *[MiniExtractPlugin](miniextractplugin.md)*

## Properties

###  apply

• **apply**: *function*

*Inherited from [AbstractMiniExtractPlugin](abstractminiextractplugin.md).[apply](abstractminiextractplugin.md#apply)*

*Defined in [src/types/subclassing-abstract.ts:94](https://github.com/JuroOravec/mini-extract-plugin/blob/87f855a/src/types/subclassing-abstract.ts#L94)*

#### Type declaration:

▸ (`c`: Compiler): *void*

**Parameters:**

Name | Type |
------ | ------ |
`c` | Compiler |

___

###  classOptions

• **classOptions**: *Required‹[ClassOptions](classoptions.md)‹I["classOptions"]››*

*Overrides [AbstractMiniExtractPlugin](abstractminiextractplugin.md).[classOptions](abstractminiextractplugin.md#classoptions)*

*Defined in [src/types/subclassing.ts:82](https://github.com/JuroOravec/mini-extract-plugin/blob/87f855a/src/types/subclassing.ts#L82)*

___

###  hooks

• **hooks**: *[ActiveHooks](../README.md#activehooks)*

*Overrides [AbstractMiniExtractPlugin](abstractminiextractplugin.md).[hooks](abstractminiextractplugin.md#hooks)*

*Defined in [src/types/subclassing.ts:81](https://github.com/JuroOravec/mini-extract-plugin/blob/87f855a/src/types/subclassing.ts#L81)*

___

###  options

• **options**: *Params["constructorOptions"]*

*Inherited from [AbstractMiniExtractPlugin](abstractminiextractplugin.md).[options](abstractminiextractplugin.md#options)*

*Defined in [src/types/subclassing-abstract.ts:92](https://github.com/JuroOravec/mini-extract-plugin/blob/87f855a/src/types/subclassing-abstract.ts#L92)*

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

*Inherited from [AbstractMiniExtractPlugin](abstractminiextractplugin.md).[loader](abstractminiextractplugin.md#loader)*

*Defined in [src/types/subclassing-abstract.ts:95](https://github.com/JuroOravec/mini-extract-plugin/blob/87f855a/src/types/subclassing-abstract.ts#L95)*

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

*Inherited from [AbstractMiniExtractPlugin](abstractminiextractplugin.md).[pitch](abstractminiextractplugin.md#pitch)*

*Defined in [src/types/subclassing-abstract.ts:101](https://github.com/JuroOravec/mini-extract-plugin/blob/87f855a/src/types/subclassing-abstract.ts#L101)*

**Parameters:**

Name | Type |
------ | ------ |
`loaderContext` | any |
`request` | string |
`precedingRequest` | string |
`data` | object |

**Returns:** *void*
