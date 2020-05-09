[mini-extract-plugin](../README.md) › [ModuleBase](modulebase.md)

# Interface: ModuleBase

Shared base of the interface for Webpack's Module class with some overrides
to match the Module objects that are encountered in the extraction process.

## Hierarchy

* Module

  ↳ **ModuleBase**

  ↳ [Module](../classes/module.md)

  ↳ [Module](../classes/module.md)

## Index

### Constructors

* [constructor](modulebase.md#constructor)

### Properties

* [_chunks](modulebase.md#_chunks)
* [_rewriteChunkInReasons](modulebase.md#_rewritechunkinreasons)
* [_source](modulebase.md#_source)
* [buildInfo](modulebase.md#buildinfo)
* [buildMeta](modulebase.md#buildmeta)
* [built](modulebase.md#built)
* [chunksIterable](modulebase.md#chunksiterable)
* [content](modulebase.md#content)
* [context](modulebase.md#context)
* [debugId](modulebase.md#debugid)
* [depth](modulebase.md#depth)
* [errors](modulebase.md#errors)
* [exportsArgument](modulebase.md#exportsargument)
* [factoryMeta](modulebase.md#factorymeta)
* [getNumberOfChunks](modulebase.md#getnumberofchunks)
* [hash](modulebase.md#hash)
* [id](modulebase.md#id)
* [index](modulebase.md#index)
* [index2](modulebase.md#index2)
* [issuer](modulebase.md#issuer)
* [moduleArgument](modulebase.md#moduleargument)
* [optimizationBailout](modulebase.md#optimizationbailout)
* [optional](modulebase.md#optional)
* [prefetched](modulebase.md#prefetched)
* [profile](modulebase.md#profile)
* [reasons](modulebase.md#reasons)
* [renderedHash](modulebase.md#renderedhash)
* [resolveOptions](modulebase.md#resolveoptions)
* [type](modulebase.md#type)
* [useSourceMap](modulebase.md#usesourcemap)
* [used](modulebase.md#used)
* [usedExports](modulebase.md#usedexports)
* [warnings](modulebase.md#warnings)

### Methods

* [_doRewriteChunkInReasons](modulebase.md#_dorewritechunkinreasons)
* [addChunk](modulebase.md#addchunk)
* [addReason](modulebase.md#addreason)
* [disconnect](modulebase.md#disconnect)
* [getChunks](modulebase.md#getchunks)
* [hasEqualsChunks](modulebase.md#hasequalschunks)
* [hasReasonForChunk](modulebase.md#hasreasonforchunk)
* [hasReasons](modulebase.md#hasreasons)
* [isEntryModule](modulebase.md#isentrymodule)
* [isInChunk](modulebase.md#isinchunk)
* [isProvided](modulebase.md#isprovided)
* [isUsed](modulebase.md#isused)
* [needRebuild](modulebase.md#needrebuild)
* [removeChunk](modulebase.md#removechunk)
* [removeReason](modulebase.md#removereason)
* [rewriteChunkInReasons](modulebase.md#rewritechunkinreasons)
* [setChunks](modulebase.md#setchunks)
* [sortItems](modulebase.md#sortitems)
* [toString](modulebase.md#tostring)
* [unbuild](modulebase.md#unbuild)
* [unseal](modulebase.md#unseal)
* [updateHash](modulebase.md#updatehash)

## Constructors

###  constructor

\+ **new ModuleBase**(`type`: string, `context?`: undefined | string): *[ModuleBase](modulebase.md)*

*Inherited from [ModuleBase](modulebase.md).[constructor](modulebase.md#constructor)*

Defined in node_modules/@types/webpack/index.d.ts:776

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |
`context?` | undefined &#124; string |

**Returns:** *[ModuleBase](modulebase.md)*

## Properties

###  _chunks

• **_chunks**: *SortableSet‹Chunk›*

*Inherited from [ModuleBase](modulebase.md).[_chunks](modulebase.md#_chunks)*

Defined in node_modules/@types/webpack/index.d.ts:790

___

###  _rewriteChunkInReasons

• **_rewriteChunkInReasons**: *object | undefined*

*Inherited from [ModuleBase](modulebase.md).[_rewriteChunkInReasons](modulebase.md#_rewritechunkinreasons)*

Defined in node_modules/@types/webpack/index.d.ts:803

___

###  _source

• **_source**: *any*

*Inherited from [ModuleBase](modulebase.md).[_source](modulebase.md#_source)*

Defined in node_modules/@types/webpack/index.d.ts:807

___

###  buildInfo

• **buildInfo**: *any*

*Inherited from [ModuleBase](modulebase.md).[buildInfo](modulebase.md#buildinfo)*

Defined in node_modules/@types/webpack/index.d.ts:788

___

###  buildMeta

• **buildMeta**: *any*

*Inherited from [ModuleBase](modulebase.md).[buildMeta](modulebase.md#buildmeta)*

Defined in node_modules/@types/webpack/index.d.ts:787

___

###  built

• **built**: *boolean*

*Inherited from [ModuleBase](modulebase.md).[built](modulebase.md#built)*

Defined in node_modules/@types/webpack/index.d.ts:798

___

###  chunksIterable

• **chunksIterable**: *SortableSet‹Chunk›*

*Inherited from [ModuleBase](modulebase.md).[chunksIterable](modulebase.md#chunksiterable)*

Defined in node_modules/@types/webpack/index.d.ts:822

___

###  content

• **content**: *string*

*Defined in [src/types/base.ts:14](https://github.com/JuroOravec/mini-extract-plugin/blob/9e394f3/src/types/base.ts#L14)*

___

###  context

• **context**: *string | null*

*Inherited from [ModuleBase](modulebase.md).[context](modulebase.md#context)*

Defined in node_modules/@types/webpack/index.d.ts:779

___

###  debugId

• **debugId**: *number*

*Inherited from [ModuleBase](modulebase.md).[debugId](modulebase.md#debugid)*

Defined in node_modules/@types/webpack/index.d.ts:780

___

###  depth

• **depth**: *number | null*

*Inherited from [ModuleBase](modulebase.md).[depth](modulebase.md#depth)*

Defined in node_modules/@types/webpack/index.d.ts:794

___

###  errors

• **errors**: *any[]*

*Inherited from [ModuleBase](modulebase.md).[errors](modulebase.md#errors)*

Defined in node_modules/@types/webpack/index.d.ts:786

___

###  exportsArgument

• **exportsArgument**: *string | "exports"*

*Inherited from [ModuleBase](modulebase.md).[exportsArgument](modulebase.md#exportsargument)*

Defined in node_modules/@types/webpack/index.d.ts:809

___

###  factoryMeta

• **factoryMeta**: *any*

*Inherited from [ModuleBase](modulebase.md).[factoryMeta](modulebase.md#factorymeta)*

Defined in node_modules/@types/webpack/index.d.ts:784

___

###  getNumberOfChunks

• **getNumberOfChunks**: *number*

*Inherited from [ModuleBase](modulebase.md).[getNumberOfChunks](modulebase.md#getnumberofchunks)*

Defined in node_modules/@types/webpack/index.d.ts:821

___

###  hash

• **hash**: *string | undefined*

*Inherited from [ModuleBase](modulebase.md).[hash](modulebase.md#hash)*

Defined in node_modules/@types/webpack/index.d.ts:781

___

###  id

• **id**: *string*

*Overrides void*

*Defined in [src/types/base.ts:13](https://github.com/JuroOravec/mini-extract-plugin/blob/9e394f3/src/types/base.ts#L13)*

___

###  index

• **index**: *number | null*

*Inherited from [ModuleBase](modulebase.md).[index](modulebase.md#index)*

Defined in node_modules/@types/webpack/index.d.ts:792

___

###  index2

• **index2**: *number | null*

*Inherited from [ModuleBase](modulebase.md).[index2](modulebase.md#index2)*

Defined in node_modules/@types/webpack/index.d.ts:793

___

###  issuer

• **issuer**: *Module | null*

*Inherited from [ModuleBase](modulebase.md).[issuer](modulebase.md#issuer)*

Defined in node_modules/@types/webpack/index.d.ts:795

___

###  moduleArgument

• **moduleArgument**: *string | "module"*

*Inherited from [ModuleBase](modulebase.md).[moduleArgument](modulebase.md#moduleargument)*

Defined in node_modules/@types/webpack/index.d.ts:810

___

###  optimizationBailout

• **optimizationBailout**: *string | any[]*

*Inherited from [ModuleBase](modulebase.md).[optimizationBailout](modulebase.md#optimizationbailout)*

Defined in node_modules/@types/webpack/index.d.ts:802

___

###  optional

• **optional**: *boolean*

*Inherited from [ModuleBase](modulebase.md).[optional](modulebase.md#optional)*

Defined in node_modules/@types/webpack/index.d.ts:819

___

###  prefetched

• **prefetched**: *boolean*

*Inherited from [ModuleBase](modulebase.md).[prefetched](modulebase.md#prefetched)*

Defined in node_modules/@types/webpack/index.d.ts:797

___

###  profile

• **profile**: *any*

*Inherited from [ModuleBase](modulebase.md).[profile](modulebase.md#profile)*

Defined in node_modules/@types/webpack/index.d.ts:796

___

###  reasons

• **reasons**: *any[]*

*Inherited from [ModuleBase](modulebase.md).[reasons](modulebase.md#reasons)*

Defined in node_modules/@types/webpack/index.d.ts:789

___

###  renderedHash

• **renderedHash**: *string | undefined*

*Inherited from [ModuleBase](modulebase.md).[renderedHash](modulebase.md#renderedhash)*

Defined in node_modules/@types/webpack/index.d.ts:782

___

###  resolveOptions

• **resolveOptions**: *any*

*Inherited from [ModuleBase](modulebase.md).[resolveOptions](modulebase.md#resolveoptions)*

Defined in node_modules/@types/webpack/index.d.ts:783

___

###  type

• **type**: *string*

*Inherited from [ModuleBase](modulebase.md).[type](modulebase.md#type)*

Defined in node_modules/@types/webpack/index.d.ts:778

___

###  useSourceMap

• **useSourceMap**: *boolean*

*Inherited from [ModuleBase](modulebase.md).[useSourceMap](modulebase.md#usesourcemap)*

Defined in node_modules/@types/webpack/index.d.ts:806

___

###  used

• **used**: *null | boolean*

*Inherited from [ModuleBase](modulebase.md).[used](modulebase.md#used)*

Defined in node_modules/@types/webpack/index.d.ts:800

___

###  usedExports

• **usedExports**: *false | true | string[] | null*

*Inherited from [ModuleBase](modulebase.md).[usedExports](modulebase.md#usedexports)*

Defined in node_modules/@types/webpack/index.d.ts:801

___

###  warnings

• **warnings**: *any[]*

*Inherited from [ModuleBase](modulebase.md).[warnings](modulebase.md#warnings)*

Defined in node_modules/@types/webpack/index.d.ts:785

## Methods

###  _doRewriteChunkInReasons

▸ **_doRewriteChunkInReasons**(`oldChunk`: Chunk, `newChunks`: Chunk[]): *void*

*Inherited from [ModuleBase](modulebase.md).[_doRewriteChunkInReasons](modulebase.md#_dorewritechunkinreasons)*

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

*Inherited from [ModuleBase](modulebase.md).[addChunk](modulebase.md#addchunk)*

Defined in node_modules/@types/webpack/index.d.ts:815

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | Chunk |

**Returns:** *boolean*

___

###  addReason

▸ **addReason**(`module`: Module, `dependency`: any, `explanation`: any): *void*

*Inherited from [ModuleBase](modulebase.md).[addReason](modulebase.md#addreason)*

Defined in node_modules/@types/webpack/index.d.ts:824

**Parameters:**

Name | Type |
------ | ------ |
`module` | Module |
`dependency` | any |
`explanation` | any |

**Returns:** *void*

___

###  disconnect

▸ **disconnect**(): *void*

*Inherited from [ModuleBase](modulebase.md).[disconnect](modulebase.md#disconnect)*

Defined in node_modules/@types/webpack/index.d.ts:812

**Returns:** *void*

___

###  getChunks

▸ **getChunks**(): *Chunk[]*

*Inherited from [ModuleBase](modulebase.md).[getChunks](modulebase.md#getchunks)*

Defined in node_modules/@types/webpack/index.d.ts:820

**Returns:** *Chunk[]*

___

###  hasEqualsChunks

▸ **hasEqualsChunks**(`module`: Module): *boolean*

*Inherited from [ModuleBase](modulebase.md).[hasEqualsChunks](modulebase.md#hasequalschunks)*

Defined in node_modules/@types/webpack/index.d.ts:823

**Parameters:**

Name | Type |
------ | ------ |
`module` | Module |

**Returns:** *boolean*

___

###  hasReasonForChunk

▸ **hasReasonForChunk**(`chunk`: Chunk): *boolean*

*Inherited from [ModuleBase](modulebase.md).[hasReasonForChunk](modulebase.md#hasreasonforchunk)*

Defined in node_modules/@types/webpack/index.d.ts:826

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | Chunk |

**Returns:** *boolean*

___

###  hasReasons

▸ **hasReasons**(): *boolean*

*Inherited from [ModuleBase](modulebase.md).[hasReasons](modulebase.md#hasreasons)*

Defined in node_modules/@types/webpack/index.d.ts:827

**Returns:** *boolean*

___

###  isEntryModule

▸ **isEntryModule**(): *boolean*

*Inherited from [ModuleBase](modulebase.md).[isEntryModule](modulebase.md#isentrymodule)*

Defined in node_modules/@types/webpack/index.d.ts:818

**Returns:** *boolean*

___

###  isInChunk

▸ **isInChunk**(`chunk`: Chunk): *boolean*

*Inherited from [ModuleBase](modulebase.md).[isInChunk](modulebase.md#isinchunk)*

Defined in node_modules/@types/webpack/index.d.ts:817

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | Chunk |

**Returns:** *boolean*

___

###  isProvided

▸ **isProvided**(`exportName`: string): *boolean | null*

*Inherited from [ModuleBase](modulebase.md).[isProvided](modulebase.md#isprovided)*

Defined in node_modules/@types/webpack/index.d.ts:831

**Parameters:**

Name | Type |
------ | ------ |
`exportName` | string |

**Returns:** *boolean | null*

___

###  isUsed

▸ **isUsed**(`exportName?`: undefined | string): *boolean | string*

*Inherited from [ModuleBase](modulebase.md).[isUsed](modulebase.md#isused)*

Defined in node_modules/@types/webpack/index.d.ts:830

**Parameters:**

Name | Type |
------ | ------ |
`exportName?` | undefined &#124; string |

**Returns:** *boolean | string*

___

###  needRebuild

▸ **needRebuild**(`fileTimestamps`: any, `contextTimestamps`: any): *boolean*

*Inherited from [ModuleBase](modulebase.md).[needRebuild](modulebase.md#needrebuild)*

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

*Inherited from [ModuleBase](modulebase.md).[removeChunk](modulebase.md#removechunk)*

Defined in node_modules/@types/webpack/index.d.ts:816

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | Chunk |

**Returns:** *boolean*

___

###  removeReason

▸ **removeReason**(`module`: Module, `dependency`: any): *boolean*

*Inherited from [ModuleBase](modulebase.md).[removeReason](modulebase.md#removereason)*

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

*Inherited from [ModuleBase](modulebase.md).[rewriteChunkInReasons](modulebase.md#rewritechunkinreasons)*

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

*Inherited from [ModuleBase](modulebase.md).[setChunks](modulebase.md#setchunks)*

Defined in node_modules/@types/webpack/index.d.ts:814

**Parameters:**

Name | Type |
------ | ------ |
`chunks` | Chunk[] |

**Returns:** *void*

___

###  sortItems

▸ **sortItems**(`sortChunks?`: undefined | false | true): *void*

*Inherited from [ModuleBase](modulebase.md).[sortItems](modulebase.md#sortitems)*

Defined in node_modules/@types/webpack/index.d.ts:835

**Parameters:**

Name | Type |
------ | ------ |
`sortChunks?` | undefined &#124; false &#124; true |

**Returns:** *void*

___

###  toString

▸ **toString**(): *string*

*Inherited from [ModuleBase](modulebase.md).[toString](modulebase.md#tostring)*

Defined in node_modules/@types/webpack/index.d.ts:832

**Returns:** *string*

___

###  unbuild

▸ **unbuild**(): *void*

*Inherited from [ModuleBase](modulebase.md).[unbuild](modulebase.md#unbuild)*

Defined in node_modules/@types/webpack/index.d.ts:836

**Returns:** *void*

___

###  unseal

▸ **unseal**(): *void*

*Inherited from [ModuleBase](modulebase.md).[unseal](modulebase.md#unseal)*

Defined in node_modules/@types/webpack/index.d.ts:813

**Returns:** *void*

___

###  updateHash

▸ **updateHash**(`hash`: any): *void*

*Inherited from [ModuleBase](modulebase.md).[updateHash](modulebase.md#updatehash)*

Defined in node_modules/@types/webpack/index.d.ts:834

**Parameters:**

Name | Type |
------ | ------ |
`hash` | any |

**Returns:** *void*
