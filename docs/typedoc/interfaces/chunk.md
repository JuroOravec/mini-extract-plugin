[mini-extract-plugin](../README.md) › [Chunk](chunk.md)

# Interface: Chunk

Interface for Webpack's Chunk class with some overrides to match the Chunk
objects that are encountered in the extraction process.

## Hierarchy

* Chunk

  ↳ **Chunk**

## Index

### Constructors

* [constructor](chunk.md#constructor)

### Properties

* [_groups](chunk.md#_groups)
* [_modules](chunk.md#_modules)
* [chunkReason](chunk.md#chunkreason)
* [contentHash](chunk.md#contenthash)
* [debugId](chunk.md#debugid)
* [entryModule](chunk.md#entrymodule)
* [extraAsync](chunk.md#extraasync)
* [filenameTemplate](chunk.md#filenametemplate)
* [files](chunk.md#files)
* [groupsIterable](chunk.md#groupsiterable)
* [hash](chunk.md#hash)
* [id](chunk.md#id)
* [ids](chunk.md#ids)
* [modulesIterable](chunk.md#modulesiterable)
* [name](chunk.md#name)
* [preventIntegration](chunk.md#preventintegration)
* [removedModules](chunk.md#removedmodules)
* [rendered](chunk.md#rendered)
* [renderedHash](chunk.md#renderedhash)

### Methods

* [addGroup](chunk.md#addgroup)
* [addModule](chunk.md#addmodule)
* [addMultiplierAndOverhead](chunk.md#addmultiplierandoverhead)
* [canBeInitial](chunk.md#canbeinitial)
* [canBeIntegrated](chunk.md#canbeintegrated)
* [compareTo](chunk.md#compareto)
* [containsModule](chunk.md#containsmodule)
* [getAllAsyncChunks](chunk.md#getallasyncchunks)
* [getChildIdsByOrders](chunk.md#getchildidsbyorders)
* [getChildIdsByOrdersMap](chunk.md#getchildidsbyordersmap)
* [getChunkMaps](chunk.md#getchunkmaps)
* [getChunkModuleMaps](chunk.md#getchunkmodulemaps)
* [getModules](chunk.md#getmodules)
* [getModulesIdent](chunk.md#getmodulesident)
* [getNumberOfGroups](chunk.md#getnumberofgroups)
* [getNumberOfModules](chunk.md#getnumberofmodules)
* [hasEntryModule](chunk.md#hasentrymodule)
* [hasModuleInGraph](chunk.md#hasmoduleingraph)
* [hasRuntime](chunk.md#hasruntime)
* [integrate](chunk.md#integrate)
* [integratedSize](chunk.md#integratedsize)
* [isEmpty](chunk.md#isempty)
* [isInGroup](chunk.md#isingroup)
* [isOnlyInitial](chunk.md#isonlyinitial)
* [modulesSize](chunk.md#modulessize)
* [moveModule](chunk.md#movemodule)
* [remove](chunk.md#remove)
* [removeGroup](chunk.md#removegroup)
* [removeModule](chunk.md#removemodule)
* [setModules](chunk.md#setmodules)
* [size](chunk.md#size)
* [sortItems](chunk.md#sortitems)
* [sortModules](chunk.md#sortmodules)
* [split](chunk.md#split)
* [toString](chunk.md#tostring)
* [updateHash](chunk.md#updatehash)

## Constructors

###  constructor

\+ **new Chunk**(`name?`: undefined | string): *[Chunk](chunk.md)*

*Inherited from [Chunk](chunk.md).[constructor](chunk.md#constructor)*

Defined in node_modules/@types/webpack/index.d.ts:842

**Parameters:**

Name | Type |
------ | ------ |
`name?` | undefined &#124; string |

**Returns:** *[Chunk](chunk.md)*

## Properties

###  _groups

• **_groups**: *SortableSet‹ChunkGroup›*

*Inherited from [Chunk](chunk.md).[_groups](chunk.md#_groups)*

Defined in node_modules/@types/webpack/index.d.ts:852

___

###  _modules

• **_modules**: *SortableSet‹Module›*

*Inherited from [Chunk](chunk.md).[_modules](chunk.md#_modules)*

Defined in node_modules/@types/webpack/index.d.ts:850

___

###  chunkReason

• **chunkReason**: *string | undefined*

*Inherited from [Chunk](chunk.md).[chunkReason](chunk.md#chunkreason)*

Defined in node_modules/@types/webpack/index.d.ts:858

___

###  contentHash

• **contentHash**: *object*

*Overrides void*

*Defined in [src/types/webpack.ts:53](https://github.com/JuroOravec/mini-extract-plugin/blob/ee56c59/src/types/webpack.ts#L53)*

#### Type declaration:

* \[ **key**: *string*\]: string

___

###  debugId

• **debugId**: *number*

*Inherited from [Chunk](chunk.md).[debugId](chunk.md#debugid)*

Defined in node_modules/@types/webpack/index.d.ts:846

___

###  entryModule

• **entryModule**: *Module | undefined*

*Inherited from [Chunk](chunk.md).[entryModule](chunk.md#entrymodule)*

Defined in node_modules/@types/webpack/index.d.ts:849

___

###  extraAsync

• **extraAsync**: *boolean*

*Inherited from [Chunk](chunk.md).[extraAsync](chunk.md#extraasync)*

Defined in node_modules/@types/webpack/index.d.ts:859

___

###  filenameTemplate

• **filenameTemplate**: *string | undefined*

*Inherited from [Chunk](chunk.md).[filenameTemplate](chunk.md#filenametemplate)*

Defined in node_modules/@types/webpack/index.d.ts:851

___

###  files

• **files**: *string[]*

*Inherited from [Chunk](chunk.md).[files](chunk.md#files)*

Defined in node_modules/@types/webpack/index.d.ts:853

___

###  groupsIterable

• **groupsIterable**: *SortableSet‹[ChunkGroup](../README.md#chunkgroup)›*

*Overrides void*

*Defined in [src/types/webpack.ts:54](https://github.com/JuroOravec/mini-extract-plugin/blob/ee56c59/src/types/webpack.ts#L54)*

___

###  hash

• **hash**: *string | undefined*

*Inherited from [Chunk](chunk.md).[hash](chunk.md#hash)*

Defined in node_modules/@types/webpack/index.d.ts:855

___

###  id

• **id**: *number | null*

*Inherited from [Chunk](chunk.md).[id](chunk.md#id)*

Defined in node_modules/@types/webpack/index.d.ts:844

___

###  ids

• **ids**: *number[] | null*

*Inherited from [Chunk](chunk.md).[ids](chunk.md#ids)*

Defined in node_modules/@types/webpack/index.d.ts:845

___

###  modulesIterable

• **modulesIterable**: *SortableSet‹Module›*

*Inherited from [Chunk](chunk.md).[modulesIterable](chunk.md#modulesiterable)*

Defined in node_modules/@types/webpack/index.d.ts:873

___

###  name

• **name**: *string*

*Inherited from [Chunk](chunk.md).[name](chunk.md#name)*

Defined in node_modules/@types/webpack/index.d.ts:847

___

###  preventIntegration

• **preventIntegration**: *boolean*

*Inherited from [Chunk](chunk.md).[preventIntegration](chunk.md#preventintegration)*

Defined in node_modules/@types/webpack/index.d.ts:848

___

###  removedModules

• **removedModules**: *any*

*Inherited from [Chunk](chunk.md).[removedModules](chunk.md#removedmodules)*

Defined in node_modules/@types/webpack/index.d.ts:860

___

###  rendered

• **rendered**: *boolean*

*Inherited from [Chunk](chunk.md).[rendered](chunk.md#rendered)*

Defined in node_modules/@types/webpack/index.d.ts:854

___

###  renderedHash

• **renderedHash**: *string | undefined*

*Inherited from [Chunk](chunk.md).[renderedHash](chunk.md#renderedhash)*

Defined in node_modules/@types/webpack/index.d.ts:857

## Methods

###  addGroup

▸ **addGroup**(`chunkGroup`: ChunkGroup): *boolean*

*Inherited from [Chunk](chunk.md).[addGroup](chunk.md#addgroup)*

Defined in node_modules/@types/webpack/index.d.ts:875

**Parameters:**

Name | Type |
------ | ------ |
`chunkGroup` | ChunkGroup |

**Returns:** *boolean*

___

###  addModule

▸ **addModule**(`module`: Module): *boolean*

*Inherited from [Chunk](chunk.md).[addModule](chunk.md#addmodule)*

Defined in node_modules/@types/webpack/index.d.ts:867

**Parameters:**

Name | Type |
------ | ------ |
`module` | Module |

**Returns:** *boolean*

___

###  addMultiplierAndOverhead

▸ **addMultiplierAndOverhead**(`size`: number, `options`: object): *number*

*Inherited from [Chunk](chunk.md).[addMultiplierAndOverhead](chunk.md#addmultiplierandoverhead)*

Defined in node_modules/@types/webpack/index.d.ts:894

**Parameters:**

▪ **size**: *number*

▪ **options**: *object*

Name | Type |
------ | ------ |
`chunkOverhead?` | undefined &#124; number |
`entryChunkMultiplicator?` | undefined &#124; number |

**Returns:** *number*

___

###  canBeInitial

▸ **canBeInitial**(): *boolean*

*Inherited from [Chunk](chunk.md).[canBeInitial](chunk.md#canbeinitial)*

Defined in node_modules/@types/webpack/index.d.ts:863

**Returns:** *boolean*

___

###  canBeIntegrated

▸ **canBeIntegrated**(`otherChunk`: Chunk): *boolean*

*Inherited from [Chunk](chunk.md).[canBeIntegrated](chunk.md#canbeintegrated)*

Defined in node_modules/@types/webpack/index.d.ts:893

**Parameters:**

Name | Type |
------ | ------ |
`otherChunk` | Chunk |

**Returns:** *boolean*

___

###  compareTo

▸ **compareTo**(`otherChunk`: Chunk): *-1 | 0 | 1*

*Inherited from [Chunk](chunk.md).[compareTo](chunk.md#compareto)*

Defined in node_modules/@types/webpack/index.d.ts:883

**Parameters:**

Name | Type |
------ | ------ |
`otherChunk` | Chunk |

**Returns:** *-1 | 0 | 1*

___

###  containsModule

▸ **containsModule**(`module`: Module): *boolean*

*Inherited from [Chunk](chunk.md).[containsModule](chunk.md#containsmodule)*

Defined in node_modules/@types/webpack/index.d.ts:884

**Parameters:**

Name | Type |
------ | ------ |
`module` | Module |

**Returns:** *boolean*

___

###  getAllAsyncChunks

▸ **getAllAsyncChunks**(): *Set‹Chunk›*

*Inherited from [Chunk](chunk.md).[getAllAsyncChunks](chunk.md#getallasyncchunks)*

Defined in node_modules/@types/webpack/index.d.ts:911

**Returns:** *Set‹Chunk›*

___

###  getChildIdsByOrders

▸ **getChildIdsByOrders**(): *any*

*Inherited from [Chunk](chunk.md).[getChildIdsByOrders](chunk.md#getchildidsbyorders)*

Defined in node_modules/@types/webpack/index.d.ts:917

**Returns:** *any*

___

###  getChildIdsByOrdersMap

▸ **getChildIdsByOrdersMap**(`includeDirectChildren?`: undefined | false | true): *any*

*Inherited from [Chunk](chunk.md).[getChildIdsByOrdersMap](chunk.md#getchildidsbyordersmap)*

Defined in node_modules/@types/webpack/index.d.ts:918

**Parameters:**

Name | Type |
------ | ------ |
`includeDirectChildren?` | undefined &#124; false &#124; true |

**Returns:** *any*

___

###  getChunkMaps

▸ **getChunkMaps**(`realHash`: boolean): *object*

*Inherited from [Chunk](chunk.md).[getChunkMaps](chunk.md#getchunkmaps)*

Defined in node_modules/@types/webpack/index.d.ts:912

**Parameters:**

Name | Type |
------ | ------ |
`realHash` | boolean |

**Returns:** *object*

* **contentHash**: *any*

* **hash**: *any*

* **name**: *any*

___

###  getChunkModuleMaps

▸ **getChunkModuleMaps**(`filterFn`: Function): *object*

*Inherited from [Chunk](chunk.md).[getChunkModuleMaps](chunk.md#getchunkmodulemaps)*

Defined in node_modules/@types/webpack/index.d.ts:920

**Parameters:**

Name | Type |
------ | ------ |
`filterFn` | Function |

**Returns:** *object*

* **hash**: *any*

* **id**: *any*

___

###  getModules

▸ **getModules**(): *Module[]*

*Inherited from [Chunk](chunk.md).[getModules](chunk.md#getmodules)*

Defined in node_modules/@types/webpack/index.d.ts:885

**Returns:** *Module[]*

___

###  getModulesIdent

▸ **getModulesIdent**(): *any[]*

*Inherited from [Chunk](chunk.md).[getModulesIdent](chunk.md#getmodulesident)*

Defined in node_modules/@types/webpack/index.d.ts:886

**Returns:** *any[]*

___

###  getNumberOfGroups

▸ **getNumberOfGroups**(): *number*

*Inherited from [Chunk](chunk.md).[getNumberOfGroups](chunk.md#getnumberofgroups)*

Defined in node_modules/@types/webpack/index.d.ts:878

**Returns:** *number*

___

###  getNumberOfModules

▸ **getNumberOfModules**(): *number*

*Inherited from [Chunk](chunk.md).[getNumberOfModules](chunk.md#getnumberofmodules)*

Defined in node_modules/@types/webpack/index.d.ts:870

**Returns:** *number*

___

###  hasEntryModule

▸ **hasEntryModule**(): *boolean*

*Inherited from [Chunk](chunk.md).[hasEntryModule](chunk.md#hasentrymodule)*

Defined in node_modules/@types/webpack/index.d.ts:865

**Returns:** *boolean*

___

###  hasModuleInGraph

▸ **hasModuleInGraph**(`filterFn`: function, `filterChunkFn`: function): *boolean*

*Inherited from [Chunk](chunk.md).[hasModuleInGraph](chunk.md#hasmoduleingraph)*

Defined in node_modules/@types/webpack/index.d.ts:921

**Parameters:**

▪ **filterFn**: *function*

▸ (`module`: Module): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`module` | Module |

▪ **filterChunkFn**: *function*

▸ (`chunk`: Chunk): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | Chunk |

**Returns:** *boolean*

___

###  hasRuntime

▸ **hasRuntime**(): *boolean*

*Inherited from [Chunk](chunk.md).[hasRuntime](chunk.md#hasruntime)*

Defined in node_modules/@types/webpack/index.d.ts:862

**Returns:** *boolean*

___

###  integrate

▸ **integrate**(`otherChunk`: Chunk, `reason`: string): *boolean*

*Inherited from [Chunk](chunk.md).[integrate](chunk.md#integrate)*

Defined in node_modules/@types/webpack/index.d.ts:889

**Parameters:**

Name | Type |
------ | ------ |
`otherChunk` | Chunk |
`reason` | string |

**Returns:** *boolean*

___

###  integratedSize

▸ **integratedSize**(`otherChunk`: Chunk, `options`: any): *number | false*

*Inherited from [Chunk](chunk.md).[integratedSize](chunk.md#integratedsize)*

Defined in node_modules/@types/webpack/index.d.ts:906

**Parameters:**

Name | Type |
------ | ------ |
`otherChunk` | Chunk |
`options` | any |

**Returns:** *number | false*

___

###  isEmpty

▸ **isEmpty**(): *boolean*

*Inherited from [Chunk](chunk.md).[isEmpty](chunk.md#isempty)*

Defined in node_modules/@types/webpack/index.d.ts:891

**Returns:** *boolean*

___

###  isInGroup

▸ **isInGroup**(`chunkGroup`: ChunkGroup): *boolean*

*Inherited from [Chunk](chunk.md).[isInGroup](chunk.md#isingroup)*

Defined in node_modules/@types/webpack/index.d.ts:877

**Parameters:**

Name | Type |
------ | ------ |
`chunkGroup` | ChunkGroup |

**Returns:** *boolean*

___

###  isOnlyInitial

▸ **isOnlyInitial**(): *boolean*

*Inherited from [Chunk](chunk.md).[isOnlyInitial](chunk.md#isonlyinitial)*

Defined in node_modules/@types/webpack/index.d.ts:864

**Returns:** *boolean*

___

###  modulesSize

▸ **modulesSize**(): *number*

*Inherited from [Chunk](chunk.md).[modulesSize](chunk.md#modulessize)*

Defined in node_modules/@types/webpack/index.d.ts:901

**Returns:** *number*

___

###  moveModule

▸ **moveModule**(`module`: Module, `otherChunk`: Chunk): *void*

*Inherited from [Chunk](chunk.md).[moveModule](chunk.md#movemodule)*

Defined in node_modules/@types/webpack/index.d.ts:888

**Parameters:**

Name | Type |
------ | ------ |
`module` | Module |
`otherChunk` | Chunk |

**Returns:** *void*

___

###  remove

▸ **remove**(`reason?`: undefined | string): *void*

*Inherited from [Chunk](chunk.md).[remove](chunk.md#remove)*

Defined in node_modules/@types/webpack/index.d.ts:887

**Parameters:**

Name | Type |
------ | ------ |
`reason?` | undefined &#124; string |

**Returns:** *void*

___

###  removeGroup

▸ **removeGroup**(`chunkGroup`: ChunkGroup): *boolean*

*Inherited from [Chunk](chunk.md).[removeGroup](chunk.md#removegroup)*

Defined in node_modules/@types/webpack/index.d.ts:876

**Parameters:**

Name | Type |
------ | ------ |
`chunkGroup` | ChunkGroup |

**Returns:** *boolean*

___

###  removeModule

▸ **removeModule**(`module`: Module): *boolean*

*Inherited from [Chunk](chunk.md).[removeModule](chunk.md#removemodule)*

Defined in node_modules/@types/webpack/index.d.ts:868

**Parameters:**

Name | Type |
------ | ------ |
`module` | Module |

**Returns:** *boolean*

___

###  setModules

▸ **setModules**(`modules`: Module[]): *void*

*Inherited from [Chunk](chunk.md).[setModules](chunk.md#setmodules)*

Defined in node_modules/@types/webpack/index.d.ts:869

**Parameters:**

Name | Type |
------ | ------ |
`modules` | Module[] |

**Returns:** *void*

___

###  size

▸ **size**(`options?`: undefined | object): *number*

*Inherited from [Chunk](chunk.md).[size](chunk.md#size)*

Defined in node_modules/@types/webpack/index.d.ts:902

**Parameters:**

Name | Type |
------ | ------ |
`options?` | undefined &#124; object |

**Returns:** *number*

___

###  sortItems

▸ **sortItems**(): *void*

*Inherited from [Chunk](chunk.md).[sortItems](chunk.md#sortitems)*

Defined in node_modules/@types/webpack/index.d.ts:910

**Returns:** *void*

___

###  sortModules

▸ **sortModules**(`sortByFn`: function): *void*

*Inherited from [Chunk](chunk.md).[sortModules](chunk.md#sortmodules)*

Defined in node_modules/@types/webpack/index.d.ts:907

**Parameters:**

▪ **sortByFn**: *function*

▸ (`module1`: Module, `module2`: Module): *-1 | 0 | 1*

**Parameters:**

Name | Type |
------ | ------ |
`module1` | Module |
`module2` | Module |

**Returns:** *void*

___

###  split

▸ **split**(`newChunk`: Chunk): *void*

*Inherited from [Chunk](chunk.md).[split](chunk.md#split)*

Defined in node_modules/@types/webpack/index.d.ts:890

**Parameters:**

Name | Type |
------ | ------ |
`newChunk` | Chunk |

**Returns:** *void*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Chunk](chunk.md).[toString](chunk.md#tostring)*

Defined in node_modules/@types/webpack/index.d.ts:925

**Returns:** *string*

___

###  updateHash

▸ **updateHash**(`hash`: any): *void*

*Inherited from [Chunk](chunk.md).[updateHash](chunk.md#updatehash)*

Defined in node_modules/@types/webpack/index.d.ts:892

**Parameters:**

Name | Type |
------ | ------ |
`hash` | any |

**Returns:** *void*
