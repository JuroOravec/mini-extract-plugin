[mini-extract-plugin](README.md)

# mini-extract-plugin

## Index

### Classes

* [Dependency](classes/dependency.md)
* [DependencyTemplate](classes/dependencytemplate.md)
* [Module](classes/module.md)
* [ModuleFactory](classes/modulefactory.md)

### Interfaces

* [AsyncParallelBailHook](interfaces/asyncparallelbailhook.md)
* [AsyncParallelHook](interfaces/asyncparallelhook.md)
* [AsyncSeriesBailHook](interfaces/asyncseriesbailhook.md)
* [AsyncSeriesHook](interfaces/asyncserieshook.md)
* [AsyncSeriesWaterfallHook](interfaces/asyncserieswaterfallhook.md)
* [Chunk](interfaces/chunk.md)
* [ClassOptions](interfaces/classoptions.md)
* [CompilationContext](interfaces/compilationcontext.md)
* [CompilerContext](interfaces/compilercontext.md)
* [Context](interfaces/context.md)
* [DependencyBase](interfaces/dependencybase.md)
* [DependencyOptions](interfaces/dependencyoptions.md)
* [Hash](interfaces/hash.md)
* [HookDefinition](interfaces/hookdefinition.md)
* [HookDefinitionArg](interfaces/hookdefinitionarg.md)
* [HookDefinitionReturn](interfaces/hookdefinitionreturn.md)
* [LoaderFuncContext](interfaces/loaderfunccontext.md)
* [LoaderModuleContext](interfaces/loadermodulecontext.md)
* [MiniExtractPlugin](interfaces/miniextractplugin.md)
* [ModuleBase](interfaces/modulebase.md)
* [PitchCompilationContext](interfaces/pitchcompilationcontext.md)
* [PitchCompilerContext](interfaces/pitchcompilercontext.md)
* [PitchContext](interfaces/pitchcontext.md)
* [RenderContext](interfaces/rendercontext.md)
* [RequestShortener](interfaces/requestshortener.md)
* [SubclassOptions](interfaces/subclassoptions.md)
* [SyncBailHook](interfaces/syncbailhook.md)
* [SyncHook](interfaces/synchook.md)
* [SyncLoopHook](interfaces/syncloophook.md)
* [SyncWaterfallHook](interfaces/syncwaterfallhook.md)

### Type aliases

* [ActiveAsyncHookNames](README.md#activeasynchooknames)
* [ActiveAsyncHooks](README.md#activeasynchooks)
* [ActiveHookDefinitions](README.md#activehookdefinitions)
* [ActiveHookNames](README.md#activehooknames)
* [ActiveHooks](README.md#activehooks)
* [ActiveSyncHookNames](README.md#activesynchooknames)
* [ActiveSyncHooks](README.md#activesynchooks)
* [AllowedNames](README.md#allowednames)
* [AnyFunc](README.md#anyfunc)
* [AsyncHookType](README.md#asynchooktype)
* [AsyncParallelBailHookClass](README.md#asyncparallelbailhookclass)
* [AsyncParallelHookClass](README.md#asyncparallelhookclass)
* [AsyncSeriesBailHookClass](README.md#asyncseriesbailhookclass)
* [AsyncSeriesHookClass](README.md#asyncserieshookclass)
* [AsyncSeriesWaterfallHookClass](README.md#asyncserieswaterfallhookclass)
* [Callback](README.md#callback)
* [ChunkGraph](README.md#chunkgraph)
* [ChunkGroup](README.md#chunkgroup)
* [CodeGenerationResult](README.md#codegenerationresult)
* [Collection](README.md#collection)
* [Constructor](README.md#constructor)
* [ConstructorOptions](README.md#constructoroptions)
* [DependencyClass](README.md#dependencyclass)
* [DependencyTemplateClass](README.md#dependencytemplateclass)
* [FirstNRequiredTuple](README.md#firstnrequiredtuple)
* [FirstNRequiredVariadicTuple](README.md#firstnrequiredvariadictuple)
* [FlagExcludedType](README.md#flagexcludedtype)
* [GetModuleFilenameOptions](README.md#getmodulefilenameoptions)
* [HookClass](README.md#hookclass)
* [HookDefinitions](README.md#hookdefinitions)
* [HookInstanceFromClass](README.md#hookinstancefromclass)
* [Hooks](README.md#hooks)
* [LoaderContext](README.md#loadercontext)
* [MiniExtractPluginClass](README.md#miniextractpluginclass)
* [ModuleClass](README.md#moduleclass)
* [ModuleFactoryClass](README.md#modulefactoryclass)
* [ModuleFactoryCreateArgs](README.md#modulefactorycreateargs)
* [ModuleFactoryData](README.md#modulefactorydata)
* [ModuleGraph](README.md#modulegraph)
* [Omit](README.md#omit)
* [OmitType](README.md#omittype)
* [Override](README.md#override)
* [Overrides](README.md#overrides)
* [PartialTaps](README.md#partialtaps)
* [RenderContentAssetOptions](README.md#rendercontentassetoptions)
* [RenderManifestEntry](README.md#rendermanifestentry)
* [RenderManifestOptions](README.md#rendermanifestoptions)
* [RequiredTuple](README.md#requiredtuple)
* [RuntimeTemplate](README.md#runtimetemplate)
* [SyncBailHookClass](README.md#syncbailhookclass)
* [SyncHookClass](README.md#synchookclass)
* [SyncHookType](README.md#synchooktype)
* [SyncLoopHookClass](README.md#syncloophookclass)
* [SyncWaterfallHookClass](README.md#syncwaterfallhookclass)
* [TapTypes](README.md#taptypes)
* [Taps](README.md#taps)
* [WithOptional](README.md#withoptional)

### Variables

* [REGEXP_CHUNKHASH](README.md#const-regexp_chunkhash)
* [REGEXP_CONTENTHASH](README.md#const-regexp_contenthash)
* [REGEXP_NAME](README.md#const-regexp_name)
* [TypedWebpackDep](README.md#const-typedwebpackdep)
* [asyncHooks](README.md#const-asynchooks)
* [createHash](README.md#const-createhash)
* [debug](README.md#const-debug)
* [definitions](README.md#const-definitions)
* [hooks](README.md#const-hooks)

### Functions

* [apply](README.md#apply)
* [callTap](README.md#calltap)
* [castHookDefinitions](README.md#casthookdefinitions)
* [castStrLit](README.md#caststrlit)
* [castTuple](README.md#casttuple)
* [create](README.md#create)
* [defaultFilename](README.md#defaultfilename)
* [enumerate](README.md#enumerate)
* [evalCode](README.md#evalcode)
* [exposedPromise](README.md#exposedpromise)
* [findById](README.md#findbyid)
* [getDebugLogger](README.md#getdebuglogger)
* [getModuleFilename](README.md#getmodulefilename)
* [hooksFromDefinitions](README.md#hooksfromdefinitions)
* [hotLoader](README.md#hotloader)
* [isHookAsync](README.md#ishookasync)
* [isIterOfIter](README.md#const-isiterofiter)
* [isIterable](README.md#isiterable)
* [lastItem](README.md#lastitem)
* [loader](README.md#loader)
* [miniExtractPluginFactory](README.md#miniextractpluginfactory)
* [pitch](README.md#pitch)
* [pluginFactory](README.md#pluginfactory)
* [renameClass](README.md#renameclass)
* [renderContentAsset](README.md#rendercontentasset)
* [subclass](README.md#subclass)
* [tapMany](README.md#tapmany)

## Type aliases

###  ActiveAsyncHookNames

Ƭ **ActiveAsyncHookNames**: *keyof ActiveAsyncHooks*

*Defined in [src/types/hook.ts:103](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/hook.ts#L103)*

Union of the names of the defined async hooks.

___

###  ActiveAsyncHooks

Ƭ **ActiveAsyncHooks**: *[OmitType](README.md#omittype)‹[ActiveHooks](README.md#activehooks), [SyncHookType](README.md#synchooktype)›*

*Defined in [src/types/hook.ts:99](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/hook.ts#L99)*

Async hooks of ActiveHooks

___

###  ActiveHookDefinitions

Ƭ **ActiveHookDefinitions**: *typeof definitions*

*Defined in [src/types/hook.ts:83](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/hook.ts#L83)*

___

###  ActiveHookNames

Ƭ **ActiveHookNames**: *keyof ActiveHooks*

*Defined in [src/types/hook.ts:94](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/hook.ts#L94)*

Union of the names of the defined hooks.

___

###  ActiveHooks

Ƭ **ActiveHooks**: *typeof hooks*

*Defined in [src/types/hook.ts:90](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/hook.ts#L90)*

Hooks type that infers to the defined hooks.

___

###  ActiveSyncHookNames

Ƭ **ActiveSyncHookNames**: *keyof ActiveSyncHooks*

*Defined in [src/types/hook.ts:112](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/hook.ts#L112)*

Union of the names of the defined sync hooks.

___

###  ActiveSyncHooks

Ƭ **ActiveSyncHooks**: *[OmitType](README.md#omittype)‹[ActiveHooks](README.md#activehooks), [AsyncHookType](README.md#asynchooktype)›*

*Defined in [src/types/hook.ts:108](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/hook.ts#L108)*

Sync hooks of ActiveHooks

___

###  AllowedNames

Ƭ **AllowedNames**: *FlagExcludedType<Base, Type>[keyof Base]*

*Defined in [src/types/util.ts:28](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/util.ts#L28)*

___

###  AnyFunc

Ƭ **AnyFunc**: *function*

*Defined in [src/types/util.ts:6](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/util.ts#L6)*

Generalized function type that can be used anywhere where signature is not
important. Unlike Function class, this type is compatible with typed
signatures.

#### Type declaration:

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

###  AsyncHookType

Ƭ **AsyncHookType**: *[AsyncParallelBailHook](interfaces/asyncparallelbailhook.md) | [AsyncParallelHook](interfaces/asyncparallelhook.md) | [AsyncSeriesBailHook](interfaces/asyncseriesbailhook.md) | [AsyncSeriesHook](interfaces/asyncserieshook.md) | [AsyncSeriesWaterfallHook](interfaces/asyncserieswaterfallhook.md)*

*Defined in [src/types/hook.ts:61](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/hook.ts#L61)*

___

###  AsyncParallelBailHookClass

Ƭ **AsyncParallelBailHookClass**: *[Constructor](README.md#constructor)‹[AsyncParallelBailHook](interfaces/asyncparallelbailhook.md)‹T1, T2, T3, THookResult››*

*Defined in [src/types/hooks-definition.ts:79](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/hooks-definition.ts#L79)*

___

###  AsyncParallelHookClass

Ƭ **AsyncParallelHookClass**: *[Constructor](README.md#constructor)‹[AsyncParallelHook](interfaces/asyncparallelhook.md)‹T1, T2, T3››*

*Defined in [src/types/hooks-definition.ts:67](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/hooks-definition.ts#L67)*

___

###  AsyncSeriesBailHookClass

Ƭ **AsyncSeriesBailHookClass**: *[Constructor](README.md#constructor)‹[AsyncSeriesBailHook](interfaces/asyncseriesbailhook.md)‹T1, T2, T3, THookResult››*

*Defined in [src/types/hooks-definition.ts:102](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/hooks-definition.ts#L102)*

___

###  AsyncSeriesHookClass

Ƭ **AsyncSeriesHookClass**: *[Constructor](README.md#constructor)‹[AsyncSeriesHook](interfaces/asyncserieshook.md)‹T1, T2, T3››*

*Defined in [src/types/hooks-definition.ts:90](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/hooks-definition.ts#L90)*

___

###  AsyncSeriesWaterfallHookClass

Ƭ **AsyncSeriesWaterfallHookClass**: *[Constructor](README.md#constructor)‹[AsyncSeriesWaterfallHook](interfaces/asyncserieswaterfallhook.md)‹T1, T2, T3››*

*Defined in [src/types/hooks-definition.ts:113](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/hooks-definition.ts#L113)*

___

###  Callback

Ƭ **Callback**: *ModuleFactoryCreateArgs[1]*

*Defined in [src/models/module-factory.ts:13](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/models/module-factory.ts#L13)*

___

###  ChunkGraph

Ƭ **ChunkGraph**: *any*

*Defined in [src/types/webpack.ts:61](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/webpack.ts#L61)*

___

###  ChunkGroup

Ƭ **ChunkGroup**: *ChunkGroup & object*

*Defined in [src/types/webpack.ts:43](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/webpack.ts#L43)*

Interface for Webpack's ChunkGroup class with some overrides to match the
ChunkGroup objects that are encountered in the extraction process.

___

###  CodeGenerationResult

Ƭ **CodeGenerationResult**: *any*

*Defined in [src/types/webpack.ts:57](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/webpack.ts#L57)*

___

###  Collection

Ƭ **Collection**: *object*

*Defined in [src/types/hook.ts:166](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/hook.ts#L166)*

Collection of hooks. Object where key is hook name and value is a
tapable.Hook instance

#### Type declaration:

* \[ **key**: *string*\]: Hook

___

###  Constructor

Ƭ **Constructor**: *object*

*Defined in [src/types/util.ts:32](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/util.ts#L32)*

#### Type declaration:

* **new __type**(...`agrs`: any[]): *T*

___

###  ConstructorOptions

Ƭ **ConstructorOptions**: *object*

*Defined in [src/types/subclassing.ts:63](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/subclassing.ts#L63)*

#### Type declaration:

* **chunkFilename**? : *undefined | string*

* **filename**? : *undefined | string*

* **ignoreOrder**? : *undefined | false | true*

* **moduleFilename**? : *string | Function*

___

###  DependencyClass

Ƭ **DependencyClass**: *[Constructor](README.md#constructor)‹[Dependency](classes/dependency.md)› & object*

*Defined in [src/types/subclassing.ts:26](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/subclassing.ts#L26)*

___

###  DependencyTemplateClass

Ƭ **DependencyTemplateClass**: *[Constructor](README.md#constructor)‹DependencyTemplate› & typeof Tapable*

*Defined in [src/types/subclassing.ts:17](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/subclassing.ts#L17)*

___

###  FirstNRequiredTuple

Ƭ **FirstNRequiredTuple**: *TL extends 1 ? [L extends 1 | 2 | 3 | 4 | 5 ? NonNullable<T[0]> : T[0]] : TL extends 2 ? [L extends 1 | 2 | 3 | 4 | 5 ? NonNullable<T[0]> : T[0], L extends 2 | 3 | 4 | 5 ? NonNullable<T[1]> : T[1]] : TL extends 3 ? [L extends 1 | 2 | 3 | 4 | 5 ? NonNullable<T[0]> : T[0], L extends 2 | 3 | 4 | 5 ? NonNullable<T[1]> : T[1], L extends 3 | 4 | 5 ? NonNullable<T[2]> : T[2]] : TL extends 4 ? [L extends 1 | 2 | 3 | 4 | 5 ? NonNullable<T[0]> : T[0], L extends 2 | 3 | 4 | 5 ? NonNullable<T[1]> : T[1], L extends 3 | 4 | 5 ? NonNullable<T[2]> : T[2], L extends 4 | 5 ? NonNullable<T[3]> : T[3]] : TL extends 5 ? [L extends 1 | 2 | 3 | 4 | 5 ? NonNullable<T[0]> : T[0], L extends 2 | 3 | 4 | 5 ? NonNullable<T[1]> : T[1], L extends 3 | 4 | 5 ? NonNullable<T[2]> : T[2], L extends 4 | 5 ? NonNullable<T[3]> : T[3], L extends 5 ? NonNullable<T[4]> : T[4]] : TL extends number ? L extends 1 ? [NonNullable<T[0]>, any] : L extends 2 ? [NonNullable<T[0]>, NonNullable<T[1]>, any] : L extends 3 ? [NonNullable<T[0]>, NonNullable<T[1]>, NonNullable<T[2]>, any] : L extends 4 ? [NonNullable<T[0]>, NonNullable<T[1]>, NonNullable<T[2]>, NonNullable<T[3]>, any] : L extends 5 ? [NonNullable<T[0]>, NonNullable<T[1]>, NonNullable<T[2]>, NonNullable<T[3]>, NonNullable<T[4]>, any] : never : never*

*Defined in [src/types/util.ts:59](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/util.ts#L59)*

___

###  FirstNRequiredVariadicTuple

Ƭ **FirstNRequiredVariadicTuple**: *L extends 1 ? [NonNullable<T[0]>, any] : L extends 2 ? [NonNullable<T[0]>, NonNullable<T[1]>, any] : L extends 3 ? [NonNullable<T[0]>, NonNullable<T[1]>, NonNullable<T[2]>, any] : L extends 4 ? [NonNullable<T[0]>, NonNullable<T[1]>, NonNullable<T[2]>, NonNullable<T[3]>, any] : L extends 5 ? [NonNullable<T[0]>, NonNullable<T[1]>, NonNullable<T[2]>, NonNullable<T[3]>, NonNullable<T[4]>, any] : never*

*Defined in [src/types/util.ts:118](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/util.ts#L118)*

___

###  FlagExcludedType

Ƭ **FlagExcludedType**: *object*

*Defined in [src/types/util.ts:24](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/util.ts#L24)*

Omit type - exclude object keys based on types. This consists of three steps

#### Type declaration:

___

###  GetModuleFilenameOptions

Ƭ **GetModuleFilenameOptions**: *object*

*Defined in [src/lib/get-module-filename.ts:4](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/lib/get-module-filename.ts#L4)*

#### Type declaration:

* **context**: *[RenderContext](interfaces/rendercontext.md)*

* **default**: *string*

* **modules**: *[Module](classes/module.md)[]*

* **templateOptions**(): *object*

  * **chunk**: *[Chunk](interfaces/chunk.md)*

  * **contentHashType**: *string*

  * **hash**: *string*

___

###  HookClass

Ƭ **HookClass**: *typeof Hook | typeof SyncHook | typeof SyncWaterfallHook | typeof SyncBailHook | typeof SyncLoopHook | typeof AsyncParallelHook | typeof AsyncParallelBailHook | typeof AsyncSeriesHook | typeof AsyncSeriesBailHook | typeof AsyncSeriesWaterfallHook*

*Defined in [src/types/hooks-definition.ts:10](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/hooks-definition.ts#L10)*

___

###  HookDefinitions

Ƭ **HookDefinitions**: *object*

*Defined in [src/types/hooks-definition.ts:139](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/hooks-definition.ts#L139)*

#### Type declaration:

___

###  HookInstanceFromClass

Ƭ **HookInstanceFromClass**: *T extends AsyncSeriesWaterfallHookClass ? AsyncSeriesWaterfallHook<Arg1, Arg2, Arg3> : T extends AsyncSeriesBailHookClass ? AsyncSeriesBailHook<Arg1, Arg2, Arg3> : T extends AsyncSeriesHookClass ? AsyncSeriesHook<Arg1, Arg2, Arg3> : T extends AsyncParallelBailHookClass ? AsyncParallelBailHook<Arg1, Arg2, Arg3> : T extends AsyncParallelHookClass ? AsyncParallelHook<Arg1, Arg2, Arg3> : T extends SyncLoopHookClass ? SyncLoopHook<Arg1, Arg2, Arg3> : T extends SyncBailHookClass ? SyncBailHook<Arg1, Arg2, Arg3> : T extends SyncWaterfallHookClass ? SyncWaterfallHook<Arg1, Arg2, Arg3> : T extends SyncHookClass ? SyncHook<Arg1, Arg2, Arg3> : T extends Hook ? Hook<Arg1, Arg2, Arg3> : never*

*Defined in [src/types/hook.ts:34](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/hook.ts#L34)*

Infer instance type from class type but allow to pass parameters to the
hook instance types (using InstanceType doesn't permit that)

___

###  Hooks

Ƭ **Hooks**: *object*

*Defined in [src/types/hook.ts:74](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/hook.ts#L74)*

#### Type declaration:

___

###  LoaderContext

Ƭ **LoaderContext**: *any*

*Defined in [src/types/context.ts:11](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/context.ts#L11)*

___

###  MiniExtractPluginClass

Ƭ **MiniExtractPluginClass**: *[Constructor](README.md#constructor)‹[MiniExtractPlugin](interfaces/miniextractplugin.md)›*

*Defined in [src/types/subclassing.ts:88](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/subclassing.ts#L88)*

___

###  ModuleClass

Ƭ **ModuleClass**: *[Constructor](README.md#constructor)‹Module›*

*Defined in [src/types/subclassing.ts:33](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/subclassing.ts#L33)*

___

###  ModuleFactoryClass

Ƭ **ModuleFactoryClass**: *[Constructor](README.md#constructor)‹[ModuleFactory](classes/modulefactory.md)› & typeof Tapable*

*Defined in [src/types/subclassing.ts:46](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/subclassing.ts#L46)*

___

###  ModuleFactoryCreateArgs

Ƭ **ModuleFactoryCreateArgs**: *Parameters‹IModuleFactory["create"]›*

*Defined in [src/models/module-factory.ts:11](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/models/module-factory.ts#L11)*

___

###  ModuleFactoryData

Ƭ **ModuleFactoryData**: *ModuleFactoryCreateArgs[0]*

*Defined in [src/types/subclassing.ts:35](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/subclassing.ts#L35)*

*Defined in [src/models/module-factory.ts:12](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/models/module-factory.ts#L12)*

___

###  ModuleGraph

Ƭ **ModuleGraph**: *any*

*Defined in [src/types/webpack.ts:60](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/webpack.ts#L60)*

___

###  Omit

Ƭ **Omit**: *Pick‹T, Exclude‹keyof T, K››*

*Defined in [src/types/util.ts:11](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/util.ts#L11)*

Omit<{a: string, b: number}, 'b'> -> {a: string}

___

###  OmitType

Ƭ **OmitType**: *Pick‹Base, [AllowedNames](README.md#allowednames)‹Base, Type››*

*Defined in [src/types/util.ts:30](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/util.ts#L30)*

___

###  Override

Ƭ **Override**: *object*

*Defined in [src/types/hook.ts:151](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/hook.ts#L151)*

Hook override object, describing which MiniExtractPlugin hook should be
tapped, the tapable.Hook method used for tapping, and what functions should
be tapped to that hook.

#### Type declaration:

* **hooks**: *Array‹[AnyFunc](README.md#anyfunc)›*

* **name**: *[ActiveHookNames](README.md#activehooknames)*

* **type**: *[TapTypes](README.md#taptypes)*

___

###  Overrides

Ƭ **Overrides**: *[Override](README.md#override)[]*

*Defined in [src/types/hook.ts:160](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/hook.ts#L160)*

List of Override objects

___

###  PartialTaps

Ƭ **PartialTaps**: *Partial‹[Taps](README.md#taps)›*

*Defined in [src/types/hook.ts:138](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/hook.ts#L138)*

Partial mapping of hook name to its function signature

___

###  RenderContentAssetOptions

Ƭ **RenderContentAssetOptions**: *object*

*Defined in [src/lib/render-content-asset.ts:8](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/lib/render-content-asset.ts#L8)*

#### Type declaration:

* **context**: *[RenderContext](interfaces/rendercontext.md)*

* **ignoreOrder**: *boolean*

* **modules**: *[Module](classes/module.md)[]*

___

###  RenderManifestEntry

Ƭ **RenderManifestEntry**: *object*

*Defined in [src/types/webpack.ts:67](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/webpack.ts#L67)*

Replace with webpack-provided types once on webpack v5
See https://github.com/webpack/webpack/blob/ec12ab73616cc9991bd06ab789e4b0be7646f2d4/lib/Template.js

#### Type declaration:

* **auxiliary**? : *undefined | false | true*

* **filenameTemplate**: *string | function*

* **hash**? : *undefined | string*

* **identifier**: *string*

* **pathOptions**? : *any*

* **render**(): *function*

  * (): *Source*

___

###  RenderManifestOptions

Ƭ **RenderManifestOptions**: *object*

*Defined in [src/types/webpack.ts:80](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/webpack.ts#L80)*

Replace with webpack-provided types once on webpack v5
See https://github.com/webpack/webpack/blob/ec12ab73616cc9991bd06ab789e4b0be7646f2d4/lib/Template.js

#### Type declaration:

* **chunk**: *[Chunk](interfaces/chunk.md)*

* **chunkGraph**: *[ChunkGraph](README.md#chunkgraph)*

* **codeGenerationResults**: *Map‹[Module](classes/module.md), [CodeGenerationResult](README.md#codegenerationresult)›*

* **dependencyTemplates**: *[DependencyTemplate](classes/dependencytemplate.md)[]*

* **fullHash**: *string*

* **hash**: *string*

* **moduleGraph**: *[ModuleGraph](README.md#modulegraph)*

* **moduleTemplates**(): *object*

  * **javascript**: *ModuleTemplate*

* **outputOptions**: *any*

* **runtimeTemplate**: *[RuntimeTemplate](README.md#runtimetemplate)*

___

###  RequiredTuple

Ƭ **RequiredTuple**: *TL extends 0 ? [] : TL extends 1 ? [NonNullable<T[0]>] : TL extends 2 ? [NonNullable<T[0]>, NonNullable<T[1]>] : TL extends 3 ? [NonNullable<T[0]>, NonNullable<T[1]>, NonNullable<T[2]>] : TL extends 4 ? [NonNullable<T[0]>, NonNullable<T[1]>, NonNullable<T[2]>, NonNullable<T[3]>] : TL extends 5 ? [NonNullable<T[0]>, NonNullable<T[1]>, NonNullable<T[2]>, NonNullable<T[]>, NonNullable<T[]>] : never*

*Defined in [src/types/util.ts:36](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/util.ts#L36)*

___

###  RuntimeTemplate

Ƭ **RuntimeTemplate**: *any*

*Defined in [src/types/webpack.ts:59](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/webpack.ts#L59)*

___

###  SyncBailHookClass

Ƭ **SyncBailHookClass**: *[Constructor](README.md#constructor)‹[SyncBailHook](interfaces/syncbailhook.md)‹T1, T2, T3, THookResult››*

*Defined in [src/types/hooks-definition.ts:40](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/hooks-definition.ts#L40)*

___

###  SyncHookClass

Ƭ **SyncHookClass**: *[Constructor](README.md#constructor)‹[SyncHook](interfaces/synchook.md)‹T1, T2, T3››*

*Defined in [src/types/hooks-definition.ts:32](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/hooks-definition.ts#L32)*

___

###  SyncHookType

Ƭ **SyncHookType**: *[SyncHook](interfaces/synchook.md) | [SyncBailHook](interfaces/syncbailhook.md) | [SyncWaterfallHook](interfaces/syncwaterfallhook.md) | [SyncLoopHook](interfaces/syncloophook.md)*

*Defined in [src/types/hook.ts:68](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/hook.ts#L68)*

___

###  SyncLoopHookClass

Ƭ **SyncLoopHookClass**: *[Constructor](README.md#constructor)‹[SyncLoopHook](interfaces/syncloophook.md)‹T1, T2, T3››*

*Defined in [src/types/hooks-definition.ts:59](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/hooks-definition.ts#L59)*

___

###  SyncWaterfallHookClass

Ƭ **SyncWaterfallHookClass**: *[Constructor](README.md#constructor)‹[SyncWaterfallHook](interfaces/syncwaterfallhook.md)‹T1, T2, T3››*

*Defined in [src/types/hooks-definition.ts:51](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/hooks-definition.ts#L51)*

___

###  TapTypes

Ƭ **TapTypes**: *"tap" | "tapAsync" | "tapPromise" | "intercept"*

*Defined in [src/types/hook.ts:144](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/hook.ts#L144)*

Permitted keys to be used in `type` property of Hook Overrides.
The keys are the available methods for tapping into a tapable.Hooks.

___

###  Taps

Ƭ **Taps**: *object*

*Defined in [src/types/hook.ts:117](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/hook.ts#L117)*

Mapping of hook name to its function signature

#### Type declaration:

___

###  WithOptional

Ƭ **WithOptional**: *[Omit](README.md#omit)‹T, K› & Partial‹Pick‹T, K››*

*Defined in [src/types/util.ts:16](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/util.ts#L16)*

WithOptional<{a: string, b: number}, 'b'> -> {a: string, b?: number}

## Variables

### `Const` REGEXP_CHUNKHASH

• **REGEXP_CHUNKHASH**: *RegExp‹›* = /\[chunkhash(?::(\d+))?\]/i

*Defined in [src/methods/apply.ts:23](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/methods/apply.ts#L23)*

___

### `Const` REGEXP_CONTENTHASH

• **REGEXP_CONTENTHASH**: *RegExp‹›* = /\[contenthash(?::(\d+))?\]/i

*Defined in [src/methods/apply.ts:24](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/methods/apply.ts#L24)*

___

### `Const` REGEXP_NAME

• **REGEXP_NAME**: *RegExp‹›* = /\[name\]/i

*Defined in [src/methods/apply.ts:25](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/methods/apply.ts#L25)*

___

### `Const` TypedWebpackDep

• **TypedWebpackDep**: *typeof Dependency* = WebpackDependency

*Defined in [src/models/dependency.ts:13](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/models/dependency.ts#L13)*

___

### `Const` asyncHooks

• **asyncHooks**: *AsyncParallelBailHook | AsyncSeriesWaterfallHook[]* = [
  AsyncParallelBailHook,
  AsyncParallelHook,
  AsyncSeriesBailHook,
  AsyncSeriesHook,
  AsyncSeriesWaterfallHook,
]

*Defined in [src/lib/hook.ts:21](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/lib/hook.ts#L21)*

___

### `Const` createHash

• **createHash**: *any* = webpack.util.createHash

*Defined in [src/methods/apply.ts:21](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/methods/apply.ts#L21)*

___

### `Const` debug

• **debug**: *log* = getDebugLogger()

*Defined in [src/lib/debug.ts:16](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/lib/debug.ts#L16)*

___

### `Const` definitions

• **definitions**: *object* = castHookDefinitions({
  compiler: {
    hook: SyncHook as SyncHookClass,
    args: castTuple({
      name: castStrLit('compilerContext'),
      type: {} as CompilerContext,
    }),
    return: { name: null, type: undefined as void },
  },

  compilation: {
    hook: SyncHook as SyncHookClass,
    args: castTuple({
      name: castStrLit('compilationContext'),
      type: {} as CompilationContext,
    }),
    return: { name: null, type: undefined as void },
  },

  beforeRenderMain: {
    hook: SyncWaterfallHook as SyncWaterfallHookClass,
    args: castTuple(
      {
        name: castStrLit('renderContext'),
        type: {} as RenderContext,
      },
      {
        name: castStrLit('modules'),
        type: [] as Module[] | webpack.compilation.Module[],
      },
    ),
    return: {
      name: null,
      type: [] as
        | Module[]
        | Module[][]
        | webpack.compilation.Module[]
        | webpack.compilation.Module[][],
    },
  },

  renderMain: {
    hook: SyncWaterfallHook as SyncWaterfallHookClass,
    args: castTuple(
      {
        name: castStrLit('renderContext'),
        type: {} as RenderContext,
      },
      { name: castStrLit('moduleGroups'), type: [] as Module[][] },
    ),
    return: { name: null, type: [] as RenderManifestEntry[] },
  },

  afterRenderMain: {
    hook: SyncHook as SyncHookClass,
    args: castTuple(
      {
        name: castStrLit('renderContext'),
        type: {} as RenderContext,
      },
      {
        name: castStrLit('renderManifestEntries'),
        type: [] as RenderManifestEntry[],
      },
    ),
    return: { name: null, type: undefined as void },
  },

  beforeRenderChunk: {
    hook: SyncWaterfallHook as SyncWaterfallHookClass,
    args: castTuple(
      {
        name: castStrLit('renderContext'),
        type: {} as RenderContext,
      },
      {
        name: castStrLit('modules'),
        type: [] as Module[] | webpack.compilation.Module[],
      },
    ),
    return: {
      name: null,
      type: [] as
        | Module[]
        | Module[][]
        | webpack.compilation.Module[]
        | webpack.compilation.Module[][],
    },
  },

  renderChunk: {
    hook: SyncWaterfallHook as SyncWaterfallHookClass,
    args: castTuple(
      {
        name: castStrLit('renderContext'),
        type: {} as RenderContext,
      },
      {
        name: castStrLit('moduleGroups'),
        type: [] as Module[][],
      },
    ),
    return: { name: null, type: [] as RenderManifestEntry[] },
  },

  afterRenderChunk: {
    hook: SyncHook as SyncHookClass,
    args: castTuple(
      {
        name: castStrLit('renderContext'),
        type: {} as RenderContext,
      },
      {
        name: castStrLit('renderManifestEntries'),
        type: [] as RenderManifestEntry[],
      },
    ),
    return: { name: null, type: undefined as void },
  },

  beforeMerge: {
    hook: SyncWaterfallHook as SyncWaterfallHookClass,
    args: castTuple(
      {
        name: castStrLit('renderContext'),
        type: {} as RenderContext,
      },
      {
        name: castStrLit('modules'),
        type: [] as Module[],
      },
    ),
    return: { name: null, type: [] as Module[] },
  },

  merge: {
    hook: SyncWaterfallHook as SyncWaterfallHookClass,
    args: castTuple(
      {
        name: castStrLit('renderContext'),
        type: {} as RenderContext,
      },
      {
        name: castStrLit('modules'),
        type: [] as Module[],
      },
    ),
    return: { name: null, type: {} as Source },
  },

  afterMerge: {
    hook: SyncHook as SyncHookClass,
    args: castTuple(
      {
        name: castStrLit('renderContext'),
        type: {} as RenderContext,
      },
      {
        name: castStrLit('resultSource'),
        type: {} as Source,
      },
    ),
    return: { name: null, type: undefined as void },
  },

  pitch: {
    hook: AsyncParallelHook as AsyncParallelHookClass,
    args: castTuple({
      name: castStrLit('pitchContext'),
      type: {} as PitchContext,
    }),
    return: { name: null, type: undefined as void },
  },

  childCompiler: {
    hook: AsyncParallelHook as AsyncParallelHookClass,
    args: castTuple({
      name: castStrLit('pitchCompilerContext'),
      type: {} as PitchCompilerContext,
    }),
    return: { name: null, type: undefined as void },
  },

  source: {
    hook: AsyncSeriesWaterfallHook as AsyncSeriesWaterfallHookClass,
    args: castTuple({
      name: castStrLit('pitchCompilationContext'),
      type: {} as PitchCompilationContext,
    }),
    return: { name: null, type: '' as string },
  },

  childCompilation: {
    hook: SyncHook as SyncHookClass,
    args: castTuple({
      name: castStrLit('pitchCompilationContext'),
      type: {} as PitchCompilationContext,
    }),
    return: { name: null, type: undefined as void },
  },

  dependency: {
    hook: SyncWaterfallHook as SyncWaterfallHookClass,
    args: castTuple(
      {
        name: castStrLit('pitchCompilationContext'),
        type: {} as PitchCompilationContext,
      },
      {
        name: castStrLit('loaderModuleContext'),
        type: {} as LoaderModuleContext,
      },
    ),
    return: { name: null, type: [] as DependencyOptions[] },
  },
})

*Defined in [src/lib/hooks-definitions.ts:30](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/lib/hooks-definitions.ts#L30)*

#### Type declaration:

* ### **afterMerge**: *object*

  * **args**: *[object, object]* = castTuple(
      {
        name: castStrLit('renderContext'),
        type: {} as RenderContext,
      },
      {
        name: castStrLit('resultSource'),
        type: {} as Source,
      },
    )

  * **hook**(): *object*

    * **new __type**(...`agrs`: any[]): *T*

  * **return**: *object*

    * **name**: *null* = null

    * **type**: *void* = undefined as void

* ### **afterRenderChunk**: *object*

  * **args**: *[object, object]* = castTuple(
      {
        name: castStrLit('renderContext'),
        type: {} as RenderContext,
      },
      {
        name: castStrLit('renderManifestEntries'),
        type: [] as RenderManifestEntry[],
      },
    )

  * **hook**(): *object*

    * **new __type**(...`agrs`: any[]): *T*

  * **return**: *object*

    * **name**: *null* = null

    * **type**: *void* = undefined as void

* ### **afterRenderMain**: *object*

  * **args**: *[object, object]* = castTuple(
      {
        name: castStrLit('renderContext'),
        type: {} as RenderContext,
      },
      {
        name: castStrLit('renderManifestEntries'),
        type: [] as RenderManifestEntry[],
      },
    )

  * **hook**(): *object*

    * **new __type**(...`agrs`: any[]): *T*

  * **return**: *object*

    * **name**: *null* = null

    * **type**: *void* = undefined as void

* ### **beforeMerge**: *object*

  * **args**: *[object, object]* = castTuple(
      {
        name: castStrLit('renderContext'),
        type: {} as RenderContext,
      },
      {
        name: castStrLit('modules'),
        type: [] as Module[],
      },
    )

  * **hook**(): *object*

    * **new __type**(...`agrs`: any[]): *T*

  * **return**: *object*

    * **name**: *null* = null

    * **type**: *[Module](classes/module.md)‹›[]* = [] as Module[]

* ### **beforeRenderChunk**: *object*

  * **args**: *[object, object]* = castTuple(
      {
        name: castStrLit('renderContext'),
        type: {} as RenderContext,
      },
      {
        name: castStrLit('modules'),
        type: [] as Module[] | webpack.compilation.Module[],
      },
    )

  * **hook**(): *object*

    * **new __type**(...`agrs`: any[]): *T*

  * **return**: *object*

    * **name**: *null* = null

    * **type**: *Module‹›[] | [Module](classes/module.md)‹›[] | [Module](classes/module.md)‹›[][] | Module‹›[][]* = [] as
        | Module[]
        | Module[][]
        | webpack.compilation.Module[]
        | webpack.compilation.Module[][]

* ### **beforeRenderMain**: *object*

  * **args**: *[object, object]* = castTuple(
      {
        name: castStrLit('renderContext'),
        type: {} as RenderContext,
      },
      {
        name: castStrLit('modules'),
        type: [] as Module[] | webpack.compilation.Module[],
      },
    )

  * **hook**(): *object*

    * **new __type**(...`agrs`: any[]): *T*

  * **return**: *object*

    * **name**: *null* = null

    * **type**: *Module‹›[] | [Module](classes/module.md)‹›[] | [Module](classes/module.md)‹›[][] | Module‹›[][]* = [] as
        | Module[]
        | Module[][]
        | webpack.compilation.Module[]
        | webpack.compilation.Module[][]

* ### **childCompilation**: *object*

  * **args**: *[object]* = castTuple({
      name: castStrLit('pitchCompilationContext'),
      type: {} as PitchCompilationContext,
    })

  * **hook**(): *object*

    * **new __type**(...`agrs`: any[]): *T*

  * **return**: *object*

    * **name**: *null* = null

    * **type**: *void* = undefined as void

* ### **childCompiler**: *object*

  * **args**: *[object]* = castTuple({
      name: castStrLit('pitchCompilerContext'),
      type: {} as PitchCompilerContext,
    })

  * **hook**(): *object*

    * **new __type**(...`agrs`: any[]): *T*

  * **return**: *object*

    * **name**: *null* = null

    * **type**: *void* = undefined as void

* ### **compilation**: *object*

  * **args**: *[object]* = castTuple({
      name: castStrLit('compilationContext'),
      type: {} as CompilationContext,
    })

  * **hook**(): *object*

    * **new __type**(...`agrs`: any[]): *T*

  * **return**: *object*

    * **name**: *null* = null

    * **type**: *void* = undefined as void

* ### **compiler**: *object*

  * **args**: *[object]* = castTuple({
      name: castStrLit('compilerContext'),
      type: {} as CompilerContext,
    })

  * **hook**(): *object*

    * **new __type**(...`agrs`: any[]): *T*

  * **return**: *object*

    * **name**: *null* = null

    * **type**: *void* = undefined as void

* ### **dependency**: *object*

  * **args**: *[object, object]* = castTuple(
      {
        name: castStrLit('pitchCompilationContext'),
        type: {} as PitchCompilationContext,
      },
      {
        name: castStrLit('loaderModuleContext'),
        type: {} as LoaderModuleContext,
      },
    )

  * **hook**(): *object*

    * **new __type**(...`agrs`: any[]): *T*

  * **return**: *object*

    * **name**: *null* = null

    * **type**: *[DependencyOptions](interfaces/dependencyoptions.md)[]* = [] as DependencyOptions[]

* ### **merge**: *object*

  * **args**: *[object, object]* = castTuple(
      {
        name: castStrLit('renderContext'),
        type: {} as RenderContext,
      },
      {
        name: castStrLit('modules'),
        type: [] as Module[],
      },
    )

  * **hook**(): *object*

    * **new __type**(...`agrs`: any[]): *T*

  * **return**: *object*

    * **name**: *null* = null

    * **type**: *Source‹›* = {} as Source

* ### **pitch**: *object*

  * **args**: *[object]* = castTuple({
      name: castStrLit('pitchContext'),
      type: {} as PitchContext,
    })

  * **hook**(): *object*

    * **new __type**(...`agrs`: any[]): *T*

  * **return**: *object*

    * **name**: *null* = null

    * **type**: *void* = undefined as void

* ### **renderChunk**: *object*

  * **args**: *[object, object]* = castTuple(
      {
        name: castStrLit('renderContext'),
        type: {} as RenderContext,
      },
      {
        name: castStrLit('moduleGroups'),
        type: [] as Module[][],
      },
    )

  * **hook**(): *object*

    * **new __type**(...`agrs`: any[]): *T*

  * **return**: *object*

    * **name**: *null* = null

    * **type**: *object[]* = [] as RenderManifestEntry[]

* ### **renderMain**: *object*

  * **args**: *[object, object]* = castTuple(
      {
        name: castStrLit('renderContext'),
        type: {} as RenderContext,
      },
      { name: castStrLit('moduleGroups'), type: [] as Module[][] },
    )

  * **hook**(): *object*

    * **new __type**(...`agrs`: any[]): *T*

  * **return**: *object*

    * **name**: *null* = null

    * **type**: *object[]* = [] as RenderManifestEntry[]

* ### **source**: *object*

  * **args**: *[object]* = castTuple({
      name: castStrLit('pitchCompilationContext'),
      type: {} as PitchCompilationContext,
    })

  * **hook**(): *object*

    * **new __type**(...`agrs`: any[]): *T*

  * **return**: *object*

    * **name**: *null* = null

    * **type**: *string* = '' as string

___

### `Const` hooks

• **hooks**: *object* = hooksFromDefinitions() as Hooks<ActiveHookDefinitions>

*Defined in [src/types/hook.ts:85](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/hook.ts#L85)*

#### Type declaration:

## Functions

###  apply

▸ **apply**(`this`: [MiniExtractPlugin](interfaces/miniextractplugin.md), `compiler`: Compiler): *void*

*Defined in [src/methods/apply.ts:27](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/methods/apply.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | [MiniExtractPlugin](interfaces/miniextractplugin.md) |
`compiler` | Compiler |

**Returns:** *void*

___

###  callTap

▸ **callTap**<**N**, **H**, **F**, **FP**, **FR**, **D**, **R**>(`__namedParameters`: object): *R*

*Defined in [src/lib/hook.ts:88](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/lib/hook.ts#L88)*

Calling Tapable's hooks with default value, required arguments, and type
checking.

Accepts an object that specifies the hooks object, hook name, arguments, and
optionally default value.

The type of function arguments, return type and default value type are
inferred from the hook name.

If the hook to be called is an async hook, it is called with Hook.promise(),
and the return type is automatically wrapped in Promise

**`example`** 
const modifiedModules = callTap({
  name: 'beforeRenderChunk',
  hooks: this.hooks,
  args: [compilationContext, renderManifestArgs, renderedModules],
  default: [renderedModules] as extWebpack.Module[][],
});

**Type parameters:**

▪ **N**: *[ActiveHookNames](README.md#activehooknames)*

▪ **H**: *[ActiveHooks](README.md#activehooks)*

▪ **F**: *[AnyFunc](README.md#anyfunc)*

▪ **FP**: *Parameters‹F›*

▪ **FR**: *ReturnType‹F›*

▪ **D**: *FR*

▪ **R**: *N extends ActiveAsyncHookNames ? Promise<FR> : FR*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`args` | FP |
`defaultVal` | undefined &#124; D |
`hooks` | H |
`name` | N |

**Returns:** *R*

___

###  castHookDefinitions

▸ **castHookDefinitions**<**T**>(`definitions`: T): *T*

*Defined in [src/types/hooks-definition.ts:143](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/hooks-definition.ts#L143)*

**Type parameters:**

▪ **T**: *[HookDefinitions](README.md#hookdefinitions)*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | T |

**Returns:** *T*

___

###  castStrLit

▸ **castStrLit**<**T**>(`s`: T): *T*

*Defined in [src/types/helper.ts:1](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/helper.ts#L1)*

**Type parameters:**

▪ **T**: *string*

**Parameters:**

Name | Type |
------ | ------ |
`s` | T |

**Returns:** *T*

___

###  castTuple

▸ **castTuple**<**T**, **L**>(...`a`: T)

*Defined in [src/types/helper.ts:5](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/types/helper.ts#L5)*

**Type parameters:**

▪ **T**: *any[]*

▪ **L**: *T["length"]*

**Parameters:**

Name | Type |
------ | ------ |
`...a` | T |

___

###  create

▸ **create**(): *object*

*Defined in [src/lib/hook.ts:32](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/lib/hook.ts#L32)*

Default hooks provided by MiniExtractPlugin

**Returns:** *object*

___

###  defaultFilename

▸ **defaultFilename**(`type`: string): *string*

*Defined in [src/lib/default-filename.ts:1](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/lib/default-filename.ts#L1)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |

**Returns:** *string*

___

###  enumerate

▸ **enumerate**<**T**>(`iter`: Iterable‹T›): *Generator‹[number, T], void, unknown›*

*Defined in [src/lib/util.ts:20](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/lib/util.ts#L20)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`iter` | Iterable‹T› |

**Returns:** *Generator‹[number, T], void, unknown›*

___

###  evalCode

▸ **evalCode**(`loaderContext`: any, `code`: string, `filename`: string): *any*

*Defined in [src/lib/module.ts:20](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/lib/module.ts#L20)*

Evaluate module's source code

**Parameters:**

Name | Type |
------ | ------ |
`loaderContext` | any |
`code` | string |
`filename` | string |

**Returns:** *any*

___

###  exposedPromise

▸ **exposedPromise**(`name`: string): *object*

*Defined in [src/lib/util.ts:52](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/lib/util.ts#L52)*

Create a promise and expose its resolve and reject functions through
callables so the promise can be resolved outside of the resolve/reject scope

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *object*

* **name**: *string*

* **promise**: *Promise‹any› | null*

* **reject**: *[AnyFunc](README.md#anyfunc) | null*

* **resolve**: *[AnyFunc](README.md#anyfunc) | null*

___

###  findById

▸ **findById**<**T**>(`modules`: T[], `id`: string): *null | T*

*Defined in [src/lib/module.ts:8](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/lib/module.ts#L8)*

Find module by ID from a list of modules

**Type parameters:**

▪ **T**: *Module*

**Parameters:**

Name | Type |
------ | ------ |
`modules` | T[] |
`id` | string |

**Returns:** *null | T*

___

###  getDebugLogger

▸ **getDebugLogger**(): *log*

*Defined in [src/lib/debug.ts:4](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/lib/debug.ts#L4)*

**Returns:** *log*

___

###  getModuleFilename

▸ **getModuleFilename**(`options`: [GetModuleFilenameOptions](README.md#getmodulefilenameoptions)): *any*

*Defined in [src/lib/get-module-filename.ts:19](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/lib/get-module-filename.ts#L19)*

Function to provide user with the chance to define module filename based on
a lot of contextual data

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetModuleFilenameOptions](README.md#getmodulefilenameoptions) |

**Returns:** *any*

___

###  hooksFromDefinitions

▸ **hooksFromDefinitions**(): *object*

*Defined in [src/lib/hooks-definitions.ts:266](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/lib/hooks-definitions.ts#L266)*

Since the dependecy graph looks like this:
```
    definitions
  /     |       \
 |     \|/       _\|
 |  lib/hooks <- types/hooks
 |
 | (thru lib/hooks)
\|/
other modules
```
(Definitions are imported by both types and lib modules,
and in turn types module is imported by lib module)

We need to include the function that creates Hooks from the definitions
here, so it can be used in types/hooks and lib/hooks without circular
dependency.

**Returns:** *object*

___

###  hotLoader

▸ **hotLoader**(`content`: string | Buffer, `context`: any): *string*

*Defined in [src/lib/hot-loader.ts:4](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/lib/hot-loader.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`content` | string &#124; Buffer |
`context` | any |

**Returns:** *string*

___

###  isHookAsync

▸ **isHookAsync**(`hook`: Hook): *boolean*

*Defined in [src/lib/hook.ts:39](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/lib/hook.ts#L39)*

Determine whether the hook is an async hook

**Parameters:**

Name | Type |
------ | ------ |
`hook` | Hook |

**Returns:** *boolean*

___

### `Const` isIterOfIter

▸ **isIterOfIter**<**T**>(`m`: T): *boolean*

*Defined in [src/lib/util.ts:3](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/lib/util.ts#L3)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`m` | T |

**Returns:** *boolean*

___

###  isIterable

▸ **isIterable**<**T**>(`obj`: T): *boolean*

*Defined in [src/lib/util.ts:13](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/lib/util.ts#L13)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`obj` | T |

**Returns:** *boolean*

___

###  lastItem

▸ **lastItem**<**T**>(`arr`: T[]): *T*

*Defined in [src/lib/util.ts:44](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/lib/util.ts#L44)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`arr` | T[] |

**Returns:** *T*

___

###  loader

▸ **loader**(`this`: [MiniExtractPlugin](interfaces/miniextractplugin.md), `loaderContext`: any, `source?`: undefined | string, `sourceMap?`: undefined | string, `data?`: any): *void*

*Defined in [src/methods/loader.ts:4](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/methods/loader.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | [MiniExtractPlugin](interfaces/miniextractplugin.md) |
`loaderContext` | any |
`source?` | undefined &#124; string |
`sourceMap?` | undefined &#124; string |
`data?` | any |

**Returns:** *void*

___

###  miniExtractPluginFactory

▸ **miniExtractPluginFactory**(`options`: [ClassOptions](interfaces/classoptions.md)): *object*

*Defined in [src/index.ts:10](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/index.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ClassOptions](interfaces/classoptions.md) |

**Returns:** *object*

* **new __type**(...`agrs`: any[]): *T*

___

###  pitch

▸ **pitch**(`this`: [MiniExtractPlugin](interfaces/miniextractplugin.md), `loaderContext`: any, `remainingRequest`: string, `precedingRequest`: string, `data`: object): *Promise‹void›*

*Defined in [src/methods/pitch.ts:24](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/methods/pitch.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | [MiniExtractPlugin](interfaces/miniextractplugin.md) |
`loaderContext` | any |
`remainingRequest` | string |
`precedingRequest` | string |
`data` | object |

**Returns:** *Promise‹void›*

___

###  pluginFactory

▸ **pluginFactory**(`classOptions`: Required‹[ClassOptions](interfaces/classoptions.md)›): *object*

*Defined in [src/factory.ts:18](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/factory.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`classOptions` | Required‹[ClassOptions](interfaces/classoptions.md)› |

**Returns:** *object*

* **new __type**(...`agrs`: any[]): *T*

___

###  renameClass

▸ **renameClass**(`klass`: [Constructor](README.md#constructor)‹any›, `newName`: string): *void*

*Defined in [src/lib/util.ts:27](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/lib/util.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`klass` | [Constructor](README.md#constructor)‹any› |
`newName` | string |

**Returns:** *void*

___

###  renderContentAsset

▸ **renderContentAsset**(`__namedParameters`: object): *Source*

*Defined in [src/lib/render-content-asset.ts:14](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/lib/render-content-asset.ts#L14)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`context` | [RenderContext](interfaces/rendercontext.md) |
`ignoreOrder` | boolean |
`modules` | [Module](classes/module.md)‹›[] |

**Returns:** *Source*

___

###  subclass

▸ **subclass**(`__namedParameters`: object): *object & Tapable*

*Defined in [src/models/dependency-template.ts:21](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/models/dependency-template.ts#L21)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`type` | string |

**Returns:** *object & Tapable*

___

###  tapMany

▸ **tapMany**(`pluginName`: string, `hooksObj`: [Collection](README.md#collection), `overrides`: [Overrides](README.md#overrides)): *void*

*Defined in [src/lib/hook.ts:46](https://github.com/JuroOravec/mini-extract-plugin/blob/4b5288b/src/lib/hook.ts#L46)*

Tap many hooks

**Parameters:**

Name | Type |
------ | ------ |
`pluginName` | string |
`hooksObj` | [Collection](README.md#collection) |
`overrides` | [Overrides](README.md#overrides) |

**Returns:** *void*
