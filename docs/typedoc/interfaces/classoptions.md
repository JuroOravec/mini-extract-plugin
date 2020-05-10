[mini-extract-plugin](../README.md) › [ClassOptions](classoptions.md)

# Interface: ClassOptions <**T, DepCls, DepTemplateCls, ModCls, ModFactoryCls**>

Options passed to class factory.

Following types of classes can be overriden by passing an object of types as
the first type parameter:
- `dependencyClass` - DependencyClass subtype
- `dependencyTemplateClass` - DependencyTemplateClass subtype
- `moduleClass` - ModuleClass subtype
- `moduleFactoryClass` - ModuleFactoryClass subtype

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
}>

## Type parameters

▪ **T**: *object*

▪ **DepCls**: *[DependencyClass](../README.md#dependencyclass)*

▪ **DepTemplateCls**: *[DependencyTemplateClass](../README.md#dependencytemplateclass)*

▪ **ModCls**: *[ModuleClass](../README.md#moduleclass)*

▪ **ModFactoryCls**: *[ModuleFactoryClass](../README.md#modulefactoryclass)*

## Hierarchy

* **ClassOptions**

## Index

### Properties

* [className](classoptions.md#optional-classname)
* [dependencyClass](classoptions.md#optional-dependencyclass)
* [dependencyTemplateClass](classoptions.md#optional-dependencytemplateclass)
* [displayName](classoptions.md#optional-displayname)
* [hooks](classoptions.md#optional-hooks)
* [loaderOptionsSchema](classoptions.md#optional-loaderoptionsschema)
* [moduleClass](classoptions.md#optional-moduleclass)
* [moduleFactoryClass](classoptions.md#optional-modulefactoryclass)
* [moduleType](classoptions.md#optional-moduletype)
* [pluginName](classoptions.md#optional-pluginname)
* [pluginOptionsSchema](classoptions.md#optional-pluginoptionsschema)
* [type](classoptions.md#type)

## Properties

### `Optional` className

• **className**? : *undefined | string*

*Defined in [src/types/subclassing.ts:121](https://github.com/JuroOravec/mini-extract-plugin/blob/ee56c59/src/types/subclassing.ts#L121)*

___

### `Optional` dependencyClass

• **dependencyClass**? : *DepCls*

*Defined in [src/types/subclassing.ts:125](https://github.com/JuroOravec/mini-extract-plugin/blob/ee56c59/src/types/subclassing.ts#L125)*

___

### `Optional` dependencyTemplateClass

• **dependencyTemplateClass**? : *DepTemplateCls*

*Defined in [src/types/subclassing.ts:128](https://github.com/JuroOravec/mini-extract-plugin/blob/ee56c59/src/types/subclassing.ts#L128)*

___

### `Optional` displayName

• **displayName**? : *undefined | string*

*Defined in [src/types/subclassing.ts:120](https://github.com/JuroOravec/mini-extract-plugin/blob/ee56c59/src/types/subclassing.ts#L120)*

___

### `Optional` hooks

• **hooks**? : *[Overrides](../README.md#overrides)*

*Defined in [src/types/subclassing.ts:122](https://github.com/JuroOravec/mini-extract-plugin/blob/ee56c59/src/types/subclassing.ts#L122)*

___

### `Optional` loaderOptionsSchema

• **loaderOptionsSchema**? : *any*

*Defined in [src/types/subclassing.ts:124](https://github.com/JuroOravec/mini-extract-plugin/blob/ee56c59/src/types/subclassing.ts#L124)*

___

### `Optional` moduleClass

• **moduleClass**? : *ModCls*

*Defined in [src/types/subclassing.ts:127](https://github.com/JuroOravec/mini-extract-plugin/blob/ee56c59/src/types/subclassing.ts#L127)*

___

### `Optional` moduleFactoryClass

• **moduleFactoryClass**? : *ModFactoryCls*

*Defined in [src/types/subclassing.ts:126](https://github.com/JuroOravec/mini-extract-plugin/blob/ee56c59/src/types/subclassing.ts#L126)*

___

### `Optional` moduleType

• **moduleType**? : *undefined | string*

*Defined in [src/types/subclassing.ts:118](https://github.com/JuroOravec/mini-extract-plugin/blob/ee56c59/src/types/subclassing.ts#L118)*

___

### `Optional` pluginName

• **pluginName**? : *undefined | string*

*Defined in [src/types/subclassing.ts:119](https://github.com/JuroOravec/mini-extract-plugin/blob/ee56c59/src/types/subclassing.ts#L119)*

___

### `Optional` pluginOptionsSchema

• **pluginOptionsSchema**? : *any*

*Defined in [src/types/subclassing.ts:123](https://github.com/JuroOravec/mini-extract-plugin/blob/ee56c59/src/types/subclassing.ts#L123)*

___

###  type

• **type**: *string*

*Defined in [src/types/subclassing.ts:117](https://github.com/JuroOravec/mini-extract-plugin/blob/ee56c59/src/types/subclassing.ts#L117)*
