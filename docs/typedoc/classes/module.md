[mini-extract-plugin](../README.md) › [Module](module.md)

# Class: Module <**T, Dep**>

Interface for Webpack's Module class with some overrides to match the Module
objects that are encountered in the extraction process.

## Type parameters

▪ **T**: *object*

▪ **Dep**: *Dependency*

## Hierarchy

  ↳ [ModuleBase](../interfaces/modulebase.md)

  ↳ [ModuleBase](../interfaces/modulebase.md)

* Module

  ↳ **Module**

## Implements

* Module

## Index

### Constructors

* [constructor](module.md#constructor)

### Properties

* [_chunks](module.md#_chunks)
* [_identifier](module.md#private-_identifier)
* [_identifierIndex](module.md#private-_identifierindex)
* [_miniExtractType](module.md#_miniextracttype)
* [_moduleType](module.md#_moduletype)
* [_rewriteChunkInReasons](module.md#_rewritechunkinreasons)
* [_source](module.md#_source)
* [buildInfo](module.md#buildinfo)
* [buildMeta](module.md#buildmeta)
* [built](module.md#built)
* [chunksIterable](module.md#chunksiterable)
* [content](module.md#content)
* [context](module.md#context)
* [debugId](module.md#debugid)
* [depth](module.md#depth)
* [errors](module.md#errors)
* [exportsArgument](module.md#exportsargument)
* [factoryMeta](module.md#factorymeta)
* [getNumberOfChunks](module.md#getnumberofchunks)
* [hash](module.md#hash)
* [id](module.md#id)
* [identifier](module.md#identifier)
* [index](module.md#index)
* [index2](module.md#index2)
* [issuer](module.md#issuer)
* [loaders](module.md#loaders)
* [moduleArgument](module.md#moduleargument)
* [optimizationBailout](module.md#optimizationbailout)
* [optional](module.md#optional)
* [prefetched](module.md#prefetched)
* [profile](module.md#profile)
* [readableIdentifier](module.md#readableidentifier)
* [reasons](module.md#reasons)
* [renderedHash](module.md#renderedhash)
* [request](module.md#request)
* [resolveOptions](module.md#resolveoptions)
* [type](module.md#type)
* [updateHash](module.md#updatehash)
* [useSourceMap](module.md#usesourcemap)
* [used](module.md#used)
* [usedExports](module.md#usedexports)
* [warnings](module.md#warnings)

### Methods

* [_doRewriteChunkInReasons](module.md#_dorewritechunkinreasons)
* [addChunk](module.md#addchunk)
* [addReason](module.md#addreason)
* [build](module.md#build)
* [disconnect](module.md#disconnect)
* [getChunks](module.md#getchunks)
* [hasEqualsChunks](module.md#hasequalschunks)
* [hasReasonForChunk](module.md#hasreasonforchunk)
* [hasReasons](module.md#hasreasons)
* [isEntryModule](module.md#isentrymodule)
* [isInChunk](module.md#isinchunk)
* [isProvided](module.md#isprovided)
* [isUsed](module.md#isused)
* [nameForCondition](module.md#nameforcondition)
* [needRebuild](module.md#needrebuild)
* [removeChunk](module.md#removechunk)
* [removeReason](module.md#removereason)
* [rewriteChunkInReasons](module.md#rewritechunkinreasons)
* [setChunks](module.md#setchunks)
* [size](module.md#size)
* [sortItems](module.md#sortitems)
* [toString](module.md#tostring)
* [unbuild](module.md#unbuild)
* [unseal](module.md#unseal)
* [updateCacheModule](module.md#updatecachemodule)

## Constructors

###  constructor

\+ **new Module**(`type`: string, `context?`: undefined | string): *[Module](module.md)*

*Inherited from [ModuleBase](../interfaces/modulebase.md).[constructor](../interfaces/modulebase.md#constructor)*

*Overrides [ModuleBase](../interfaces/modulebase.md).[constructor](../interfaces/modulebase.md#constructor)*

Defined in node_modules/@types/webpack/index.d.ts:776

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |
`context?` | undefined &#124; string |

**Returns:** *[Module](module.md)*

## Properties

###  _chunks

• **_chunks**: *SortableSet‹Chunk›*

*Inherited from [ModuleBase](../interfaces/modulebase.md).[_chunks](../interfaces/modulebase.md#_chunks)*

*Overrides [ModuleBase](../interfaces/modulebase.md).[_chunks](../interfaces/modulebase.md#_chunks)*

Defined in node_modules/@types/webpack/index.d.ts:790

___

### `Private` _identifier

• **_identifier**: *Dep["identifier"]*

*Defined in [src/models/module.ts:23](https://github.com/JuroOravec/mini-extract-plugin/blob/87f855a/src/models/module.ts#L23)*

___

### `Private` _identifierIndex

• **_identifierIndex**: *Dep["identifierIndex"]*

*Defined in [src/models/module.ts:24](https://github.com/JuroOravec/mini-extract-plugin/blob/87f855a/src/models/module.ts#L24)*

___

###  _miniExtractType

• **_miniExtractType**: *Dep["miniExtractType"]*

*Defined in [src/types/webpack.ts:15](https://github.com/JuroOravec/mini-extract-plugin/blob/87f855a/src/types/webpack.ts#L15)*

*Defined in [src/models/module.ts:25](https://github.com/JuroOravec/mini-extract-plugin/blob/87f855a/src/models/module.ts#L25)*

___

###  _moduleType

• **_moduleType**: *string*

*Defined in [src/types/webpack.ts:16](https://github.com/JuroOravec/mini-extract-plugin/blob/87f855a/src/types/webpack.ts#L16)*

___

###  _rewriteChunkInReasons

• **_rewriteChunkInReasons**: *object | undefined*

*Inherited from [ModuleBase](../interfaces/modulebase.md).[_rewriteChunkInReasons](../interfaces/modulebase.md#_rewritechunkinreasons)*

*Overrides [ModuleBase](../interfaces/modulebase.md).[_rewriteChunkInReasons](../interfaces/modulebase.md#_rewritechunkinreasons)*

Defined in node_modules/@types/webpack/index.d.ts:803

___

###  _source

• **_source**: *any*

*Inherited from [ModuleBase](../interfaces/modulebase.md).[_source](../interfaces/modulebase.md#_source)*

*Overrides [ModuleBase](../interfaces/modulebase.md).[_source](../interfaces/modulebase.md#_source)*

Defined in node_modules/@types/webpack/index.d.ts:807

___

###  buildInfo

• **buildInfo**: *any*

*Inherited from [ModuleBase](../interfaces/modulebase.md).[buildInfo](../interfaces/modulebase.md#buildinfo)*

*Overrides [ModuleBase](../interfaces/modulebase.md).[buildInfo](../interfaces/modulebase.md#buildinfo)*

Defined in node_modules/@types/webpack/index.d.ts:788

___

###  buildMeta

• **buildMeta**: *any*

*Inherited from [ModuleBase](../interfaces/modulebase.md).[buildMeta](../interfaces/modulebase.md#buildmeta)*

*Overrides [ModuleBase](../interfaces/modulebase.md).[buildMeta](../interfaces/modulebase.md#buildmeta)*

Defined in node_modules/@types/webpack/index.d.ts:787

___

###  built

• **built**: *boolean*

*Inherited from [ModuleBase](../interfaces/modulebase.md).[built](../interfaces/modulebase.md#built)*

*Overrides [ModuleBase](../interfaces/modulebase.md).[built](../interfaces/modulebase.md#built)*

Defined in node_modules/@types/webpack/index.d.ts:798

___

###  chunksIterable

• **chunksIterable**: *SortableSet‹Chunk›*

*Inherited from [ModuleBase](../interfaces/modulebase.md).[chunksIterable](../interfaces/modulebase.md#chunksiterable)*

*Overrides [ModuleBase](../interfaces/modulebase.md).[chunksIterable](../interfaces/modulebase.md#chunksiterable)*

Defined in node_modules/@types/webpack/index.d.ts:822

___

###  content

• **content**: *Dep["content"]*

*Inherited from [ModuleBase](../interfaces/modulebase.md).[content](../interfaces/modulebase.md#content)*

*Overrides [ModuleBase](../interfaces/modulebase.md).[content](../interfaces/modulebase.md#content)*

*Defined in [src/types/base.ts:14](https://github.com/JuroOravec/mini-extract-plugin/blob/87f855a/src/types/base.ts#L14)*

*Defined in [src/models/module.ts:22](https://github.com/JuroOravec/mini-extract-plugin/blob/87f855a/src/models/module.ts#L22)*

___

###  context

• **context**: *string | null*

*Inherited from [ModuleBase](../interfaces/modulebase.md).[context](../interfaces/modulebase.md#context)*

*Overrides [ModuleBase](../interfaces/modulebase.md).[context](../interfaces/modulebase.md#context)*

Defined in node_modules/@types/webpack/index.d.ts:779

___

###  debugId

• **debugId**: *number*

*Inherited from [ModuleBase](../interfaces/modulebase.md).[debugId](../interfaces/modulebase.md#debugid)*

*Overrides [ModuleBase](../interfaces/modulebase.md).[debugId](../interfaces/modulebase.md#debugid)*

Defined in node_modules/@types/webpack/index.d.ts:780

___

###  depth

• **depth**: *number | null*

*Inherited from [ModuleBase](../interfaces/modulebase.md).[depth](../interfaces/modulebase.md#depth)*

*Overrides [ModuleBase](../interfaces/modulebase.md).[depth](../interfaces/modulebase.md#depth)*

Defined in node_modules/@types/webpack/index.d.ts:794

___

###  errors

• **errors**: *any[]*

*Inherited from [ModuleBase](../interfaces/modulebase.md).[errors](../interfaces/modulebase.md#errors)*

*Overrides [ModuleBase](../interfaces/modulebase.md).[errors](../interfaces/modulebase.md#errors)*

Defined in node_modules/@types/webpack/index.d.ts:786

___

###  exportsArgument

• **exportsArgument**: *string | "exports"*

*Inherited from [ModuleBase](../interfaces/modulebase.md).[exportsArgument](../interfaces/modulebase.md#exportsargument)*

*Overrides [ModuleBase](../interfaces/modulebase.md).[exportsArgument](../interfaces/modulebase.md#exportsargument)*

Defined in node_modules/@types/webpack/index.d.ts:809

___

###  factoryMeta

• **factoryMeta**: *any*

*Inherited from [ModuleBase](../interfaces/modulebase.md).[factoryMeta](../interfaces/modulebase.md#factorymeta)*

*Overrides [ModuleBase](../interfaces/modulebase.md).[factoryMeta](../interfaces/modulebase.md#factorymeta)*

Defined in node_modules/@types/webpack/index.d.ts:784

___

###  getNumberOfChunks

• **getNumberOfChunks**: *number*

*Inherited from [ModuleBase](../interfaces/modulebase.md).[getNumberOfChunks](../interfaces/modulebase.md#getnumberofchunks)*

*Overrides [ModuleBase](../interfaces/modulebase.md).[getNumberOfChunks](../interfaces/modulebase.md#getnumberofchunks)*

Defined in node_modules/@types/webpack/index.d.ts:821

___

###  hash

• **hash**: *string | undefined*

*Inherited from [ModuleBase](../interfaces/modulebase.md).[hash](../interfaces/modulebase.md#hash)*

*Overrides [ModuleBase](../interfaces/modulebase.md).[hash](../interfaces/modulebase.md#hash)*

Defined in node_modules/@types/webpack/index.d.ts:781

___

###  id

• **id**: *string*

*Inherited from [ModuleBase](../interfaces/modulebase.md).[id](../interfaces/modulebase.md#id)*

*Overrides void*

*Defined in [src/types/base.ts:13](https://github.com/JuroOravec/mini-extract-plugin/blob/87f855a/src/types/base.ts#L13)*

*Defined in [src/models/module.ts:20](https://github.com/JuroOravec/mini-extract-plugin/blob/87f855a/src/models/module.ts#L20)*

___

###  identifier

▸ **identifier**(): *string*

*Defined in [src/models/module.ts:46](https://github.com/JuroOravec/mini-extract-plugin/blob/87f855a/src/models/module.ts#L46)*

**Returns:** *string*

___

###  index

• **index**: *number | null*

*Inherited from [ModuleBase](../interfaces/modulebase.md).[index](../interfaces/modulebase.md#index)*

*Overrides [ModuleBase](../interfaces/modulebase.md).[index](../interfaces/modulebase.md#index)*

Defined in node_modules/@types/webpack/index.d.ts:792

___

###  index2

• **index2**: *number*

*Overrides [ModuleBase](../interfaces/modulebase.md).[index2](../interfaces/modulebase.md#index2)*

*Defined in [src/types/webpack.ts:17](https://github.com/JuroOravec/mini-extract-plugin/blob/87f855a/src/types/webpack.ts#L17)*

___

###  issuer

• **issuer**: *Module | null*

*Inherited from [ModuleBase](../interfaces/modulebase.md).[issuer](../interfaces/modulebase.md#issuer)*

*Overrides [ModuleBase](../interfaces/modulebase.md).[issuer](../interfaces/modulebase.md#issuer)*

Defined in node_modules/@types/webpack/index.d.ts:795

___

###  loaders

• **loaders**: *Array‹object›*

*Defined in [src/types/webpack.ts:20](https://github.com/JuroOravec/mini-extract-plugin/blob/87f855a/src/types/webpack.ts#L20)*

___

###  moduleArgument

• **moduleArgument**: *string | "module"*

*Inherited from [ModuleBase](../interfaces/modulebase.md).[moduleArgument](../interfaces/modulebase.md#moduleargument)*

*Overrides [ModuleBase](../interfaces/modulebase.md).[moduleArgument](../interfaces/modulebase.md#moduleargument)*

Defined in node_modules/@types/webpack/index.d.ts:810

___

###  optimizationBailout

• **optimizationBailout**: *string | any[]*

*Inherited from [ModuleBase](../interfaces/modulebase.md).[optimizationBailout](../interfaces/modulebase.md#optimizationbailout)*

*Overrides [ModuleBase](../interfaces/modulebase.md).[optimizationBailout](../interfaces/modulebase.md#optimizationbailout)*

Defined in node_modules/@types/webpack/index.d.ts:802

___

###  optional

• **optional**: *boolean*

*Inherited from [ModuleBase](../interfaces/modulebase.md).[optional](../interfaces/modulebase.md#optional)*

*Overrides [ModuleBase](../interfaces/modulebase.md).[optional](../interfaces/modulebase.md#optional)*

Defined in node_modules/@types/webpack/index.d.ts:819

___

###  prefetched

• **prefetched**: *boolean*

*Inherited from [ModuleBase](../interfaces/modulebase.md).[prefetched](../interfaces/modulebase.md#prefetched)*

*Overrides [ModuleBase](../interfaces/modulebase.md).[prefetched](../interfaces/modulebase.md#prefetched)*

Defined in node_modules/@types/webpack/index.d.ts:797

___

###  profile

• **profile**: *any*

*Inherited from [ModuleBase](../interfaces/modulebase.md).[profile](../interfaces/modulebase.md#profile)*

*Overrides [ModuleBase](../interfaces/modulebase.md).[profile](../interfaces/modulebase.md#profile)*

Defined in node_modules/@types/webpack/index.d.ts:796

___

###  readableIdentifier

▸ **readableIdentifier**(`requestShortener`: [RequestShortener](../interfaces/requestshortener.md)): *string*

*Defined in [src/types/subclassing-classes.ts:36](https://github.com/JuroOravec/mini-extract-plugin/blob/87f855a/src/types/subclassing-classes.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`requestShortener` | [RequestShortener](../interfaces/requestshortener.md) |

**Returns:** *string*

___

###  reasons

• **reasons**: *any[]*

*Inherited from [ModuleBase](../interfaces/modulebase.md).[reasons](../interfaces/modulebase.md#reasons)*

*Overrides [ModuleBase](../interfaces/modulebase.md).[reasons](../interfaces/modulebase.md#reasons)*

Defined in node_modules/@types/webpack/index.d.ts:789

___

###  renderedHash

• **renderedHash**: *string | undefined*

*Inherited from [ModuleBase](../interfaces/modulebase.md).[renderedHash](../interfaces/modulebase.md#renderedhash)*

*Overrides [ModuleBase](../interfaces/modulebase.md).[renderedHash](../interfaces/modulebase.md#renderedhash)*

Defined in node_modules/@types/webpack/index.d.ts:782

___

###  request

• **request**: *undefined | string*

*Defined in [src/types/webpack.ts:22](https://github.com/JuroOravec/mini-extract-plugin/blob/87f855a/src/types/webpack.ts#L22)*

*Defined in [src/types/subclassing-classes.ts:37](https://github.com/JuroOravec/mini-extract-plugin/blob/87f855a/src/types/subclassing-classes.ts#L37)*

*Defined in [src/models/module.ts:21](https://github.com/JuroOravec/mini-extract-plugin/blob/87f855a/src/models/module.ts#L21)*

___

###  resolveOptions

• **resolveOptions**: *any*

*Inherited from [ModuleBase](../interfaces/modulebase.md).[resolveOptions](../interfaces/modulebase.md#resolveoptions)*

*Overrides [ModuleBase](../interfaces/modulebase.md).[resolveOptions](../interfaces/modulebase.md#resolveoptions)*

Defined in node_modules/@types/webpack/index.d.ts:783

___

###  type

• **type**: *string*

*Inherited from [ModuleBase](../interfaces/modulebase.md).[type](../interfaces/modulebase.md#type)*

*Overrides [ModuleBase](../interfaces/modulebase.md).[type](../interfaces/modulebase.md#type)*

Defined in node_modules/@types/webpack/index.d.ts:778

___

###  updateHash

▸ **updateHash**(`hash`: [Hash](../interfaces/hash.md)): *void*

*Defined in [src/models/module.ts:82](https://github.com/JuroOravec/mini-extract-plugin/blob/87f855a/src/models/module.ts#L82)*

**Parameters:**

Name | Type |
------ | ------ |
`hash` | [Hash](../interfaces/hash.md) |

**Returns:** *void*

___

###  useSourceMap

• **useSourceMap**: *boolean*

*Inherited from [ModuleBase](../interfaces/modulebase.md).[useSourceMap](../interfaces/modulebase.md#usesourcemap)*

*Overrides [ModuleBase](../interfaces/modulebase.md).[useSourceMap](../interfaces/modulebase.md#usesourcemap)*

Defined in node_modules/@types/webpack/index.d.ts:806

___

###  used

• **used**: *null | boolean*

*Inherited from [ModuleBase](../interfaces/modulebase.md).[used](../interfaces/modulebase.md#used)*

*Overrides [ModuleBase](../interfaces/modulebase.md).[used](../interfaces/modulebase.md#used)*

Defined in node_modules/@types/webpack/index.d.ts:800

___

###  usedExports

• **usedExports**: *false | true | string[] | null*

*Inherited from [ModuleBase](../interfaces/modulebase.md).[usedExports](../interfaces/modulebase.md#usedexports)*

*Overrides [ModuleBase](../interfaces/modulebase.md).[usedExports](../interfaces/modulebase.md#usedexports)*

Defined in node_modules/@types/webpack/index.d.ts:801

___

###  warnings

• **warnings**: *any[]*

*Inherited from [ModuleBase](../interfaces/modulebase.md).[warnings](../interfaces/modulebase.md#warnings)*

*Overrides [ModuleBase](../interfaces/modulebase.md).[warnings](../interfaces/modulebase.md#warnings)*

Defined in node_modules/@types/webpack/index.d.ts:785

## Methods

###  _doRewriteChunkInReasons

▸ **_doRewriteChunkInReasons**(`oldChunk`: Chunk, `newChunks`: Chunk[]): *void*

*Inherited from [ModuleBase](../interfaces/modulebase.md).[_doRewriteChunkInReasons](../interfaces/modulebase.md#_dorewritechunkinreasons)*

*Overrides [ModuleBase](../interfaces/modulebase.md).[_doRewriteChunkInReasons](../interfaces/modulebase.md#_dorewritechunkinreasons)*

Defined in node_modules/@types/webpack/index.d.ts:829

**Parameters:**

Name | Type |
------ | ------ |
`oldChunk` | Chunk |
`newChunks` | Chunk[] |

**Returns:** *void*

___

###  addChunk

▸ **addChunk**(`chunk`: Chunk): *boolean*

*Inherited from [ModuleBase](../interfaces/modulebase.md).[addChunk](../interfaces/modulebase.md#addchunk)*

*Overrides [ModuleBase](../interfaces/modulebase.md).[addChunk](../interfaces/modulebase.md#addchunk)*

Defined in node_modules/@types/webpack/index.d.ts:815

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | Chunk |

**Returns:** *boolean*

___

###  addReason

▸ **addReason**(`module`: Module, `dependency`: any, `explanation`: any): *void*

*Inherited from [ModuleBase](../interfaces/modulebase.md).[addReason](../interfaces/modulebase.md#addreason)*

*Overrides [ModuleBase](../interfaces/modulebase.md).[addReason](../interfaces/modulebase.md#addreason)*

Defined in node_modules/@types/webpack/index.d.ts:824

**Parameters:**

Name | Type |
------ | ------ |
`module` | Module |
`dependency` | any |
`explanation` | any |

**Returns:** *void*

___

###  build

▸ **build**(`options`: any, `compilation`: any, `resolver`: any, `fileSystem`: any, `callback`: any): *void*

*Defined in [src/models/module.ts:74](https://github.com/JuroOravec/mini-extract-plugin/blob/87f855a/src/models/module.ts#L74)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | any |
`compilation` | any |
`resolver` | any |
`fileSystem` | any |
`callback` | any |

**Returns:** *void*

___

###  disconnect

▸ **disconnect**(): *void*

*Inherited from [ModuleBase](../interfaces/modulebase.md).[disconnect](../interfaces/modulebase.md#disconnect)*

*Overrides [ModuleBase](../interfaces/modulebase.md).[disconnect](../interfaces/modulebase.md#disconnect)*

Defined in node_modules/@types/webpack/index.d.ts:812

**Returns:** *void*

___

###  getChunks

▸ **getChunks**(): *Chunk[]*

*Inherited from [ModuleBase](../interfaces/modulebase.md).[getChunks](../interfaces/modulebase.md#getchunks)*

*Overrides [ModuleBase](../interfaces/modulebase.md).[getChunks](../interfaces/modulebase.md#getchunks)*

Defined in node_modules/@types/webpack/index.d.ts:820

**Returns:** *Chunk[]*

___

###  hasEqualsChunks

▸ **hasEqualsChunks**(`module`: Module): *boolean*

*Inherited from [ModuleBase](../interfaces/modulebase.md).[hasEqualsChunks](../interfaces/modulebase.md#hasequalschunks)*

*Overrides [ModuleBase](../interfaces/modulebase.md).[hasEqualsChunks](../interfaces/modulebase.md#hasequalschunks)*

Defined in node_modules/@types/webpack/index.d.ts:823

**Parameters:**

Name | Type |
------ | ------ |
`module` | Module |

**Returns:** *boolean*

___

###  hasReasonForChunk

▸ **hasReasonForChunk**(`chunk`: Chunk): *boolean*

*Inherited from [ModuleBase](../interfaces/modulebase.md).[hasReasonForChunk](../interfaces/modulebase.md#hasreasonforchunk)*

*Overrides [ModuleBase](../interfaces/modulebase.md).[hasReasonForChunk](../interfaces/modulebase.md#hasreasonforchunk)*

Defined in node_modules/@types/webpack/index.d.ts:826

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | Chunk |

**Returns:** *boolean*

___

###  hasReasons

▸ **hasReasons**(): *boolean*

*Inherited from [ModuleBase](../interfaces/modulebase.md).[hasReasons](../interfaces/modulebase.md#hasreasons)*

*Overrides [ModuleBase](../interfaces/modulebase.md).[hasReasons](../interfaces/modulebase.md#hasreasons)*

Defined in node_modules/@types/webpack/index.d.ts:827

**Returns:** *boolean*

___

###  isEntryModule

▸ **isEntryModule**(): *boolean*

*Inherited from [ModuleBase](../interfaces/modulebase.md).[isEntryModule](../interfaces/modulebase.md#isentrymodule)*

*Overrides [ModuleBase](../interfaces/modulebase.md).[isEntryModule](../interfaces/modulebase.md#isentrymodule)*

Defined in node_modules/@types/webpack/index.d.ts:818

**Returns:** *boolean*

___

###  isInChunk

▸ **isInChunk**(`chunk`: Chunk): *boolean*

*Inherited from [ModuleBase](../interfaces/modulebase.md).[isInChunk](../interfaces/modulebase.md#isinchunk)*

*Overrides [ModuleBase](../interfaces/modulebase.md).[isInChunk](../interfaces/modulebase.md#isinchunk)*

Defined in node_modules/@types/webpack/index.d.ts:817

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | Chunk |

**Returns:** *boolean*

___

###  isProvided

▸ **isProvided**(`exportName`: string): *boolean | null*

*Inherited from [ModuleBase](../interfaces/modulebase.md).[isProvided](../interfaces/modulebase.md#isprovided)*

*Overrides [ModuleBase](../interfaces/modulebase.md).[isProvided](../interfaces/modulebase.md#isprovided)*

Defined in node_modules/@types/webpack/index.d.ts:831

**Parameters:**

Name | Type |
------ | ------ |
`exportName` | string |

**Returns:** *boolean | null*

___

###  isUsed

▸ **isUsed**(`exportName?`: undefined | string): *boolean | string*

*Inherited from [ModuleBase](../interfaces/modulebase.md).[isUsed](../interfaces/modulebase.md#isused)*

*Overrides [ModuleBase](../interfaces/modulebase.md).[isUsed](../interfaces/modulebase.md#isused)*

Defined in node_modules/@types/webpack/index.d.ts:830

**Parameters:**

Name | Type |
------ | ------ |
`exportName?` | undefined &#124; string |

**Returns:** *boolean | string*

___

###  nameForCondition

▸ **nameForCondition**(): *string*

*Defined in [src/models/module.ts:56](https://github.com/JuroOravec/mini-extract-plugin/blob/87f855a/src/models/module.ts#L56)*

**Returns:** *string*

___

###  needRebuild

▸ **needRebuild**(`fileTimestamps`: any, `contextTimestamps`: any): *boolean*

*Inherited from [ModuleBase](../interfaces/modulebase.md).[needRebuild](../interfaces/modulebase.md#needrebuild)*

*Overrides [ModuleBase](../interfaces/modulebase.md).[needRebuild](../interfaces/modulebase.md#needrebuild)*

Defined in node_modules/@types/webpack/index.d.ts:833

**Parameters:**

Name | Type |
------ | ------ |
`fileTimestamps` | any |
`contextTimestamps` | any |

**Returns:** *boolean*

___

###  removeChunk

▸ **removeChunk**(`chunk`: Chunk): *boolean*

*Inherited from [ModuleBase](../interfaces/modulebase.md).[removeChunk](../interfaces/modulebase.md#removechunk)*

*Overrides [ModuleBase](../interfaces/modulebase.md).[removeChunk](../interfaces/modulebase.md#removechunk)*

Defined in node_modules/@types/webpack/index.d.ts:816

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | Chunk |

**Returns:** *boolean*

___

###  removeReason

▸ **removeReason**(`module`: Module, `dependency`: any): *boolean*

*Inherited from [ModuleBase](../interfaces/modulebase.md).[removeReason](../interfaces/modulebase.md#removereason)*

*Overrides [ModuleBase](../interfaces/modulebase.md).[removeReason](../interfaces/modulebase.md#removereason)*

Defined in node_modules/@types/webpack/index.d.ts:825

**Parameters:**

Name | Type |
------ | ------ |
`module` | Module |
`dependency` | any |

**Returns:** *boolean*

___

###  rewriteChunkInReasons

▸ **rewriteChunkInReasons**(`oldChunk`: Chunk, `newChunks`: Chunk[]): *void*

*Inherited from [ModuleBase](../interfaces/modulebase.md).[rewriteChunkInReasons](../interfaces/modulebase.md#rewritechunkinreasons)*

*Overrides [ModuleBase](../interfaces/modulebase.md).[rewriteChunkInReasons](../interfaces/modulebase.md#rewritechunkinreasons)*

Defined in node_modules/@types/webpack/index.d.ts:828

**Parameters:**

Name | Type |
------ | ------ |
`oldChunk` | Chunk |
`newChunks` | Chunk[] |

**Returns:** *void*

___

###  setChunks

▸ **setChunks**(`chunks`: Chunk[]): *void*

*Inherited from [ModuleBase](../interfaces/modulebase.md).[setChunks](../interfaces/modulebase.md#setchunks)*

*Overrides [ModuleBase](../interfaces/modulebase.md).[setChunks](../interfaces/modulebase.md#setchunks)*

Defined in node_modules/@types/webpack/index.d.ts:814

**Parameters:**

Name | Type |
------ | ------ |
`chunks` | Chunk[] |

**Returns:** *void*

___

###  size

▸ **size**(): *number*

*Defined in [src/models/module.ts:42](https://github.com/JuroOravec/mini-extract-plugin/blob/87f855a/src/models/module.ts#L42)*

**Returns:** *number*

___

###  sortItems

▸ **sortItems**(`sortChunks?`: undefined | false | true): *void*

*Inherited from [ModuleBase](../interfaces/modulebase.md).[sortItems](../interfaces/modulebase.md#sortitems)*

*Overrides [ModuleBase](../interfaces/modulebase.md).[sortItems](../interfaces/modulebase.md#sortitems)*

Defined in node_modules/@types/webpack/index.d.ts:835

**Parameters:**

Name | Type |
------ | ------ |
`sortChunks?` | undefined &#124; false &#124; true |

**Returns:** *void*

___

###  toString

▸ **toString**(): *string*

*Inherited from [ModuleBase](../interfaces/modulebase.md).[toString](../interfaces/modulebase.md#tostring)*

*Overrides [ModuleBase](../interfaces/modulebase.md).[toString](../interfaces/modulebase.md#tostring)*

Defined in node_modules/@types/webpack/index.d.ts:832

**Returns:** *string*

___

###  unbuild

▸ **unbuild**(): *void*

*Inherited from [ModuleBase](../interfaces/modulebase.md).[unbuild](../interfaces/modulebase.md#unbuild)*

*Overrides [ModuleBase](../interfaces/modulebase.md).[unbuild](../interfaces/modulebase.md#unbuild)*

Defined in node_modules/@types/webpack/index.d.ts:836

**Returns:** *void*

___

###  unseal

▸ **unseal**(): *void*

*Inherited from [ModuleBase](../interfaces/modulebase.md).[unseal](../interfaces/modulebase.md#unseal)*

*Overrides [ModuleBase](../interfaces/modulebase.md).[unseal](../interfaces/modulebase.md#unseal)*

Defined in node_modules/@types/webpack/index.d.ts:813

**Returns:** *void*

___

###  updateCacheModule

▸ **updateCacheModule**(`module`: Module): *void*

*Defined in [src/models/module.ts:65](https://github.com/JuroOravec/mini-extract-plugin/blob/87f855a/src/models/module.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`module` | Module |

**Returns:** *void*
