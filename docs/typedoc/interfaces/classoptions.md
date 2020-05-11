[mini-extract-plugin](../README.md) › [ClassOptions](classoptions.md)

# Interface: ClassOptions <**T, Params**>

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

* [AbstractClassOptions](abstractclassoptions.md)‹T›

  ↳ **ClassOptions**

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

*Inherited from [AbstractClassOptions](abstractclassoptions.md).[className](abstractclassoptions.md#optional-classname)*

*Defined in [src/types/subclassing-abstract.ts:47](https://github.com/JuroOravec/mini-extract-plugin/blob/87f855a/src/types/subclassing-abstract.ts#L47)*

___

### `Optional` dependencyClass

• **dependencyClass**? : *Params["dependencyClass"]*

*Inherited from [AbstractClassOptions](abstractclassoptions.md).[dependencyClass](abstractclassoptions.md#optional-dependencyclass)*

*Defined in [src/types/subclassing-abstract.ts:51](https://github.com/JuroOravec/mini-extract-plugin/blob/87f855a/src/types/subclassing-abstract.ts#L51)*

___

### `Optional` dependencyTemplateClass

• **dependencyTemplateClass**? : *Params["dependencyTemplateClass"]*

*Inherited from [AbstractClassOptions](abstractclassoptions.md).[dependencyTemplateClass](abstractclassoptions.md#optional-dependencytemplateclass)*

*Defined in [src/types/subclassing-abstract.ts:54](https://github.com/JuroOravec/mini-extract-plugin/blob/87f855a/src/types/subclassing-abstract.ts#L54)*

___

### `Optional` displayName

• **displayName**? : *undefined | string*

*Inherited from [AbstractClassOptions](abstractclassoptions.md).[displayName](abstractclassoptions.md#optional-displayname)*

*Defined in [src/types/subclassing-abstract.ts:46](https://github.com/JuroOravec/mini-extract-plugin/blob/87f855a/src/types/subclassing-abstract.ts#L46)*

___

### `Optional` hooks

• **hooks**? : *[Overrides](../README.md#overrides)*

*Overrides [AbstractClassOptions](abstractclassoptions.md).[hooks](abstractclassoptions.md#optional-hooks)*

*Defined in [src/types/subclassing.ts:47](https://github.com/JuroOravec/mini-extract-plugin/blob/87f855a/src/types/subclassing.ts#L47)*

___

### `Optional` loaderOptionsSchema

• **loaderOptionsSchema**? : *any*

*Inherited from [AbstractClassOptions](abstractclassoptions.md).[loaderOptionsSchema](abstractclassoptions.md#optional-loaderoptionsschema)*

*Defined in [src/types/subclassing-abstract.ts:50](https://github.com/JuroOravec/mini-extract-plugin/blob/87f855a/src/types/subclassing-abstract.ts#L50)*

___

### `Optional` moduleClass

• **moduleClass**? : *Params["moduleClass"]*

*Inherited from [AbstractClassOptions](abstractclassoptions.md).[moduleClass](abstractclassoptions.md#optional-moduleclass)*

*Defined in [src/types/subclassing-abstract.ts:53](https://github.com/JuroOravec/mini-extract-plugin/blob/87f855a/src/types/subclassing-abstract.ts#L53)*

___

### `Optional` moduleFactoryClass

• **moduleFactoryClass**? : *Params["moduleFactoryClass"]*

*Inherited from [AbstractClassOptions](abstractclassoptions.md).[moduleFactoryClass](abstractclassoptions.md#optional-modulefactoryclass)*

*Defined in [src/types/subclassing-abstract.ts:52](https://github.com/JuroOravec/mini-extract-plugin/blob/87f855a/src/types/subclassing-abstract.ts#L52)*

___

### `Optional` moduleType

• **moduleType**? : *undefined | string*

*Inherited from [AbstractClassOptions](abstractclassoptions.md).[moduleType](abstractclassoptions.md#optional-moduletype)*

*Defined in [src/types/subclassing-abstract.ts:44](https://github.com/JuroOravec/mini-extract-plugin/blob/87f855a/src/types/subclassing-abstract.ts#L44)*

___

### `Optional` pluginName

• **pluginName**? : *undefined | string*

*Inherited from [AbstractClassOptions](abstractclassoptions.md).[pluginName](abstractclassoptions.md#optional-pluginname)*

*Defined in [src/types/subclassing-abstract.ts:45](https://github.com/JuroOravec/mini-extract-plugin/blob/87f855a/src/types/subclassing-abstract.ts#L45)*

___

### `Optional` pluginOptionsSchema

• **pluginOptionsSchema**? : *any*

*Inherited from [AbstractClassOptions](abstractclassoptions.md).[pluginOptionsSchema](abstractclassoptions.md#optional-pluginoptionsschema)*

*Defined in [src/types/subclassing-abstract.ts:49](https://github.com/JuroOravec/mini-extract-plugin/blob/87f855a/src/types/subclassing-abstract.ts#L49)*

___

###  type

• **type**: *string*

*Inherited from [AbstractClassOptions](abstractclassoptions.md).[type](abstractclassoptions.md#type)*

*Defined in [src/types/subclassing-abstract.ts:43](https://github.com/JuroOravec/mini-extract-plugin/blob/87f855a/src/types/subclassing-abstract.ts#L43)*
