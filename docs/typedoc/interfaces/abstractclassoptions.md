[mini-extract-plugin](../README.md) › [AbstractClassOptions](abstractclassoptions.md)

# Interface: AbstractClassOptions <**T, Params**>

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

▪ **T**: *[ParamsDefault](paramsdefault.md)*

▪ **Params**: *[ParamsParse](../README.md#paramsparse)‹T›*

## Hierarchy

* **AbstractClassOptions**

  ↳ [ClassOptions](classoptions.md)

## Index

### Properties

* [className](abstractclassoptions.md#optional-classname)
* [dependencyClass](abstractclassoptions.md#optional-dependencyclass)
* [dependencyTemplateClass](abstractclassoptions.md#optional-dependencytemplateclass)
* [displayName](abstractclassoptions.md#optional-displayname)
* [hooks](abstractclassoptions.md#optional-hooks)
* [loaderOptionsSchema](abstractclassoptions.md#optional-loaderoptionsschema)
* [moduleClass](abstractclassoptions.md#optional-moduleclass)
* [moduleFactoryClass](abstractclassoptions.md#optional-modulefactoryclass)
* [moduleType](abstractclassoptions.md#optional-moduletype)
* [pluginName](abstractclassoptions.md#optional-pluginname)
* [pluginOptionsSchema](abstractclassoptions.md#optional-pluginoptionsschema)
* [type](abstractclassoptions.md#type)

## Properties

### `Optional` className

• **className**? : *undefined | string*

*Defined in [src/types/subclassing-abstract.ts:47](https://github.com/JuroOravec/mini-extract-plugin/blob/87f855a/src/types/subclassing-abstract.ts#L47)*

___

### `Optional` dependencyClass

• **dependencyClass**? : *Params["dependencyClass"]*

*Defined in [src/types/subclassing-abstract.ts:51](https://github.com/JuroOravec/mini-extract-plugin/blob/87f855a/src/types/subclassing-abstract.ts#L51)*

___

### `Optional` dependencyTemplateClass

• **dependencyTemplateClass**? : *Params["dependencyTemplateClass"]*

*Defined in [src/types/subclassing-abstract.ts:54](https://github.com/JuroOravec/mini-extract-plugin/blob/87f855a/src/types/subclassing-abstract.ts#L54)*

___

### `Optional` displayName

• **displayName**? : *undefined | string*

*Defined in [src/types/subclassing-abstract.ts:46](https://github.com/JuroOravec/mini-extract-plugin/blob/87f855a/src/types/subclassing-abstract.ts#L46)*

___

### `Optional` hooks

• **hooks**? : *object[]*

*Defined in [src/types/subclassing-abstract.ts:48](https://github.com/JuroOravec/mini-extract-plugin/blob/87f855a/src/types/subclassing-abstract.ts#L48)*

___

### `Optional` loaderOptionsSchema

• **loaderOptionsSchema**? : *any*

*Defined in [src/types/subclassing-abstract.ts:50](https://github.com/JuroOravec/mini-extract-plugin/blob/87f855a/src/types/subclassing-abstract.ts#L50)*

___

### `Optional` moduleClass

• **moduleClass**? : *Params["moduleClass"]*

*Defined in [src/types/subclassing-abstract.ts:53](https://github.com/JuroOravec/mini-extract-plugin/blob/87f855a/src/types/subclassing-abstract.ts#L53)*

___

### `Optional` moduleFactoryClass

• **moduleFactoryClass**? : *Params["moduleFactoryClass"]*

*Defined in [src/types/subclassing-abstract.ts:52](https://github.com/JuroOravec/mini-extract-plugin/blob/87f855a/src/types/subclassing-abstract.ts#L52)*

___

### `Optional` moduleType

• **moduleType**? : *undefined | string*

*Defined in [src/types/subclassing-abstract.ts:44](https://github.com/JuroOravec/mini-extract-plugin/blob/87f855a/src/types/subclassing-abstract.ts#L44)*

___

### `Optional` pluginName

• **pluginName**? : *undefined | string*

*Defined in [src/types/subclassing-abstract.ts:45](https://github.com/JuroOravec/mini-extract-plugin/blob/87f855a/src/types/subclassing-abstract.ts#L45)*

___

### `Optional` pluginOptionsSchema

• **pluginOptionsSchema**? : *any*

*Defined in [src/types/subclassing-abstract.ts:49](https://github.com/JuroOravec/mini-extract-plugin/blob/87f855a/src/types/subclassing-abstract.ts#L49)*

___

###  type

• **type**: *string*

*Defined in [src/types/subclassing-abstract.ts:43](https://github.com/JuroOravec/mini-extract-plugin/blob/87f855a/src/types/subclassing-abstract.ts#L43)*
