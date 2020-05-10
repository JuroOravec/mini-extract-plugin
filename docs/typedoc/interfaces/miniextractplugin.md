[mini-extract-plugin](../README.md) › [MiniExtractPlugin](miniextractplugin.md)

# Interface: MiniExtractPlugin <**T, DepCls, DepTemplateCls, ModCls, ModFactoryCls, CtorOptions**>

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

▪ **T**: *object*

▪ **DepCls**: *[DependencyClass](../README.md#dependencyclass)*

▪ **DepTemplateCls**: *[DependencyTemplateClass](../README.md#dependencytemplateclass)*

▪ **ModCls**: *[ModuleClass](../README.md#moduleclass)*

▪ **ModFactoryCls**: *[ModuleFactoryClass](../README.md#modulefactoryclass)*

▪ **CtorOptions**: *object*

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

*Defined in [src/types/subclassing.ts:204](https://github.com/JuroOravec/mini-extract-plugin/blob/ee56c59/src/types/subclassing.ts#L204)*

#### Type declaration:

▸ (`c`: theWebpack.Compiler): *void*

**Parameters:**

Name | Type |
------ | ------ |
`c` | theWebpack.Compiler |

___

###  classOptions

• **classOptions**: *Required‹[ClassOptions](classoptions.md)‹object››*

*Overrides void*

*Defined in [src/types/subclassing.ts:194](https://github.com/JuroOravec/mini-extract-plugin/blob/ee56c59/src/types/subclassing.ts#L194)*

___

###  hooks

• **hooks**: *[ActiveHooks](../README.md#activehooks)*

*Defined in [src/types/subclassing.ts:203](https://github.com/JuroOravec/mini-extract-plugin/blob/ee56c59/src/types/subclassing.ts#L203)*

___

###  options

• **options**: *CtorOptions*

*Defined in [src/types/subclassing.ts:202](https://github.com/JuroOravec/mini-extract-plugin/blob/ee56c59/src/types/subclassing.ts#L202)*

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

*Defined in [src/types/subclassing.ts:205](https://github.com/JuroOravec/mini-extract-plugin/blob/ee56c59/src/types/subclassing.ts#L205)*

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

*Defined in [src/types/subclassing.ts:211](https://github.com/JuroOravec/mini-extract-plugin/blob/ee56c59/src/types/subclassing.ts#L211)*

**Parameters:**

Name | Type |
------ | ------ |
`loaderContext` | any |
`request` | string |
`precedingRequest` | string |
`data` | object |

**Returns:** *void*
