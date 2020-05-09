[mini-extract-plugin](../README.md) › [Dependency](dependency.md)

# Class: Dependency

## Hierarchy

* Dependency

* [DependencyBase](../interfaces/dependencybase.md)

* Dependency

  ↳ **Dependency**

## Implements

* [Dependency](dependency.md)

## Implemented by

* [Dependency](dependency.md)

## Index

### Constructors

* [constructor](dependency.md#constructor)

### Properties

* [content](dependency.md#content)
* [context](dependency.md#context)
* [identifier](dependency.md#identifier)
* [identifierIndex](dependency.md#identifierindex)
* [miniExtractType](dependency.md#miniextracttype)
* [moduleType](dependency.md#moduletype)

### Methods

* [disconnect](dependency.md#disconnect)
* [getErrors](dependency.md#geterrors)
* [getExports](dependency.md#getexports)
* [getReference](dependency.md#getreference)
* [getResourceIdentifier](dependency.md#getresourceidentifier)
* [getWarnings](dependency.md#getwarnings)
* [updateHash](dependency.md#updatehash)
* [compare](dependency.md#static-compare)

## Constructors

###  constructor

\+ **new Dependency**(): *[Dependency](dependency.md)*

*Inherited from [Dependency](dependency.md).[constructor](dependency.md#constructor)*

*Overrides [Dependency](dependency.md).[constructor](dependency.md#constructor)*

Defined in node_modules/@types/webpack/index.d.ts:966

**Returns:** *[Dependency](dependency.md)*

## Properties

###  content

• **content**: *IDependency["content"]*

*Inherited from [DependencyBase](../interfaces/dependencybase.md).[content](../interfaces/dependencybase.md#content)*

*Defined in [src/types/base.ts:22](https://github.com/JuroOravec/mini-extract-plugin/blob/63bec1c/src/types/base.ts#L22)*

*Defined in [src/models/dependency.ts:18](https://github.com/JuroOravec/mini-extract-plugin/blob/63bec1c/src/models/dependency.ts#L18)*

___

###  context

• **context**: *IDependency["context"]*

*Inherited from [DependencyBase](../interfaces/dependencybase.md).[context](../interfaces/dependencybase.md#context)*

*Defined in [src/types/base.ts:21](https://github.com/JuroOravec/mini-extract-plugin/blob/63bec1c/src/types/base.ts#L21)*

*Defined in [src/models/dependency.ts:17](https://github.com/JuroOravec/mini-extract-plugin/blob/63bec1c/src/models/dependency.ts#L17)*

___

###  identifier

• **identifier**: *IDependency["identifier"]*

*Inherited from [DependencyBase](../interfaces/dependencybase.md).[identifier](../interfaces/dependencybase.md#identifier)*

*Defined in [src/types/base.ts:20](https://github.com/JuroOravec/mini-extract-plugin/blob/63bec1c/src/types/base.ts#L20)*

*Defined in [src/models/dependency.ts:16](https://github.com/JuroOravec/mini-extract-plugin/blob/63bec1c/src/models/dependency.ts#L16)*

___

###  identifierIndex

• **identifierIndex**: *IDependency["identifierIndex"]*

*Defined in [src/types/subclassing.ts:23](https://github.com/JuroOravec/mini-extract-plugin/blob/63bec1c/src/types/subclassing.ts#L23)*

*Defined in [src/models/dependency.ts:19](https://github.com/JuroOravec/mini-extract-plugin/blob/63bec1c/src/models/dependency.ts#L19)*

___

###  miniExtractType

• **miniExtractType**: *IDependency["miniExtractType"]*

*Inherited from [DependencyBase](../interfaces/dependencybase.md).[miniExtractType](../interfaces/dependencybase.md#miniextracttype)*

*Defined in [src/types/base.ts:18](https://github.com/JuroOravec/mini-extract-plugin/blob/63bec1c/src/types/base.ts#L18)*

*Defined in [src/models/dependency.ts:21](https://github.com/JuroOravec/mini-extract-plugin/blob/63bec1c/src/models/dependency.ts#L21)*

___

###  moduleType

• **moduleType**: *IDependency["moduleType"]*

*Inherited from [DependencyBase](../interfaces/dependencybase.md).[moduleType](../interfaces/dependencybase.md#moduletype)*

*Defined in [src/types/base.ts:19](https://github.com/JuroOravec/mini-extract-plugin/blob/63bec1c/src/types/base.ts#L19)*

*Defined in [src/models/dependency.ts:20](https://github.com/JuroOravec/mini-extract-plugin/blob/63bec1c/src/models/dependency.ts#L20)*

## Methods

###  disconnect

▸ **disconnect**(): *void*

*Inherited from [Dependency](dependency.md).[disconnect](dependency.md#disconnect)*

*Overrides [Dependency](dependency.md).[disconnect](dependency.md#disconnect)*

Defined in node_modules/@types/webpack/index.d.ts:974

**Returns:** *void*

___

###  getErrors

▸ **getErrors**(): *any*

*Inherited from [Dependency](dependency.md).[getErrors](dependency.md#geterrors)*

*Overrides [Dependency](dependency.md).[getErrors](dependency.md#geterrors)*

Defined in node_modules/@types/webpack/index.d.ts:972

**Returns:** *any*

___

###  getExports

▸ **getExports**(): *any*

*Inherited from [Dependency](dependency.md).[getExports](dependency.md#getexports)*

*Overrides [Dependency](dependency.md).[getExports](dependency.md#getexports)*

Defined in node_modules/@types/webpack/index.d.ts:970

**Returns:** *any*

___

###  getReference

▸ **getReference**(): *any*

*Inherited from [Dependency](dependency.md).[getReference](dependency.md#getreference)*

*Overrides [Dependency](dependency.md).[getReference](dependency.md#getreference)*

Defined in node_modules/@types/webpack/index.d.ts:969

**Returns:** *any*

___

###  getResourceIdentifier

▸ **getResourceIdentifier**(): *any*

*Inherited from [Dependency](dependency.md).[getResourceIdentifier](dependency.md#getresourceidentifier)*

*Overrides [Dependency](dependency.md).[getResourceIdentifier](dependency.md#getresourceidentifier)*

Defined in node_modules/@types/webpack/index.d.ts:968

**Returns:** *any*

___

###  getWarnings

▸ **getWarnings**(): *any*

*Inherited from [Dependency](dependency.md).[getWarnings](dependency.md#getwarnings)*

*Overrides [Dependency](dependency.md).[getWarnings](dependency.md#getwarnings)*

Defined in node_modules/@types/webpack/index.d.ts:971

**Returns:** *any*

___

###  updateHash

▸ **updateHash**(`hash`: any): *void*

*Inherited from [Dependency](dependency.md).[updateHash](dependency.md#updatehash)*

*Overrides [Dependency](dependency.md).[updateHash](dependency.md#updatehash)*

Defined in node_modules/@types/webpack/index.d.ts:973

**Parameters:**

Name | Type |
------ | ------ |
`hash` | any |

**Returns:** *void*

___

### `Static` compare

▸ **compare**(`a`: any, `b`: any): *any*

*Inherited from [Dependency](dependency.md).[compare](dependency.md#static-compare)*

*Overrides [Dependency](dependency.md).[compare](dependency.md#static-compare)*

Defined in node_modules/@types/webpack/index.d.ts:975

**Parameters:**

Name | Type |
------ | ------ |
`a` | any |
`b` | any |

**Returns:** *any*
