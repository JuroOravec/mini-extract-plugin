[mini-extract-plugin](README.md)

# mini-extract-plugin

## Index

### Classes

* [ActiveHookDefinitionsHelper](classes/activehookdefinitionshelper.md)
* [ActiveHooksHelper](classes/activehookshelper.md)
* [Dependency](classes/dependency.md)
* [DependencyTemplate](classes/dependencytemplate.md)
* [Module](classes/module.md)
* [ModuleFactory](classes/modulefactory.md)

### Interfaces

* [AbstractClassOptions](interfaces/abstractclassoptions.md)
* [AbstractMiniExtractPlugin](interfaces/abstractminiextractplugin.md)
* [AsyncParallelBailHook](interfaces/asyncparallelbailhook.md)
* [AsyncParallelHook](interfaces/asyncparallelhook.md)
* [AsyncSeriesBailHook](interfaces/asyncseriesbailhook.md)
* [AsyncSeriesHook](interfaces/asyncserieshook.md)
* [AsyncSeriesWaterfallHook](interfaces/asyncserieswaterfallhook.md)
* [Chunk](interfaces/chunk.md)
* [ClassOptions](interfaces/classoptions.md)
* [CompilationContext](interfaces/compilationcontext.md)
* [CompilerContext](interfaces/compilercontext.md)
* [ContextBase](interfaces/contextbase.md)
* [DependencyBase](interfaces/dependencybase.md)
* [DependencyOptions](interfaces/dependencyoptions.md)
* [GetModuleFilenameOptions](interfaces/getmodulefilenameoptions.md)
* [Hash](interfaces/hash.md)
* [HookDefinition](interfaces/hookdefinition.md)
* [HookDefinitionArg](interfaces/hookdefinitionarg.md)
* [HookDefinitionReturn](interfaces/hookdefinitionreturn.md)
* [LoaderFuncContext](interfaces/loaderfunccontext.md)
* [LoaderModuleContext](interfaces/loadermodulecontext.md)
* [MiniExtractPlugin](interfaces/miniextractplugin.md)
* [ModuleBase](interfaces/modulebase.md)
* [ParamsDefault](interfaces/paramsdefault.md)
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
* [TemplateOptions](interfaces/templateoptions.md)

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
* [FixateArgs](README.md#fixateargs)
* [FlagExcludedType](README.md#flagexcludedtype)
* [GetDependency](README.md#getdependency)
* [GetDependencyOptions](README.md#getdependencyoptions)
* [GetHookReturnType](README.md#gethookreturntype)
* [GetModule](README.md#getmodule)
* [GetModuleClass](README.md#getmoduleclass)
* [HookClass](README.md#hookclass)
* [HookDefinitions](README.md#hookdefinitions)
* [HookInstanceFromClass](README.md#hookinstancefromclass)
* [Hooks](README.md#hooks)
* [IfEquals](README.md#ifequals)
* [LoaderContext](README.md#loadercontext)
* [MiniExtractPluginClass](README.md#miniextractpluginclass)
* [ModFactoryArgs](README.md#modfactoryargs)
* [ModFactoryModule](README.md#modfactorymodule)
* [ModuleClass](README.md#moduleclass)
* [ModuleFactoryCallback](README.md#modulefactorycallback)
* [ModuleFactoryClass](README.md#modulefactoryclass)
* [ModuleFactoryData](README.md#modulefactorydata)
* [ModuleFilename](README.md#modulefilename)
* [ModuleFilenameFunction](README.md#modulefilenamefunction)
* [ModuleGraph](README.md#modulegraph)
* [Omit](README.md#omit)
* [OmitType](README.md#omittype)
* [Override](README.md#override)
* [Overrides](README.md#overrides)
* [ParamsParse](README.md#paramsparse)
* [PartialTaps](README.md#partialtaps)
* [RenderContentAssetOptions](README.md#rendercontentassetoptions)
* [RenderManifestEntry](README.md#rendermanifestentry)
* [RenderManifestOptions](README.md#rendermanifestoptions)
* [ReplaceType](README.md#replacetype)
* [ReplaceTypeInArray](README.md#replacetypeinarray)
* [RequiredKeys](README.md#requiredkeys)
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
* [TypedWebpackModule](README.md#const-typedwebpackmodule)
* [asyncHooks](README.md#const-asynchooks)
* [createHash](README.md#const-createhash)
* [debug](README.md#const-debug)

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
* [getDefinitions](README.md#getdefinitions)
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

*Defined in [src/types/hook.ts:149](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/hook.ts#L149)*

Union of the names of the async subset of the defined async hooks.

___

###  ActiveAsyncHooks

Ƭ **ActiveAsyncHooks**: *[OmitType](README.md#omittype)‹[ActiveHooks](README.md#activehooks)‹MEP›, [SyncHookType](README.md#synchooktype)›*

*Defined in [src/types/hook.ts:142](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/hook.ts#L142)*

Tapable's Hooks by name of the async subset of the existing hook
definitions.

___

###  ActiveHookDefinitions

Ƭ **ActiveHookDefinitions**: *ReturnType‹ActiveHookDefinitionsHelper<MEP>["fixate"]›*

*Defined in [src/types/hook.ts:105](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/hook.ts#L105)*

Existing hook definitions as type.

___

###  ActiveHookNames

Ƭ **ActiveHookNames**: *keyof ActiveHooks*

*Defined in [src/types/hook.ts:136](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/hook.ts#L136)*

Union of the names of the existing hook definitions.

___

###  ActiveHooks

Ƭ **ActiveHooks**: *ReturnType‹ActiveHooksHelper<MEP>["fixate"]›*

*Defined in [src/types/hook.ts:129](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/hook.ts#L129)*

Tapable's Hooks by name of existing hook definitions.

___

###  ActiveSyncHookNames

Ƭ **ActiveSyncHookNames**: *keyof ActiveSyncHooks*

*Defined in [src/types/hook.ts:162](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/hook.ts#L162)*

Union of the names of the sync subset of the defined async hooks.

___

###  ActiveSyncHooks

Ƭ **ActiveSyncHooks**: *[OmitType](README.md#omittype)‹[ActiveHooks](README.md#activehooks)‹MEP›, [AsyncHookType](README.md#asynchooktype)›*

*Defined in [src/types/hook.ts:155](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/hook.ts#L155)*

Tapable's Hooks by name of the sync subset of the existing hook
definitions.

___

###  AllowedNames

Ƭ **AllowedNames**: *FlagExcludedType<Base, Type>[keyof Base]*

*Defined in [src/types/util.ts:29](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/util.ts#L29)*

___

###  AnyFunc

Ƭ **AnyFunc**: *function*

*Defined in [src/types/util.ts:10](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/util.ts#L10)*

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

*Defined in [src/types/hook.ts:67](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/hook.ts#L67)*

___

###  AsyncParallelBailHookClass

Ƭ **AsyncParallelBailHookClass**: *[Constructor](README.md#constructor)‹[AsyncParallelBailHook](interfaces/asyncparallelbailhook.md)‹T1, T2, T3, THookResult››*

*Defined in [src/types/hook-definition.ts:79](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/hook-definition.ts#L79)*

___

###  AsyncParallelHookClass

Ƭ **AsyncParallelHookClass**: *[Constructor](README.md#constructor)‹[AsyncParallelHook](interfaces/asyncparallelhook.md)‹T1, T2, T3››*

*Defined in [src/types/hook-definition.ts:67](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/hook-definition.ts#L67)*

___

###  AsyncSeriesBailHookClass

Ƭ **AsyncSeriesBailHookClass**: *[Constructor](README.md#constructor)‹[AsyncSeriesBailHook](interfaces/asyncseriesbailhook.md)‹T1, T2, T3, THookResult››*

*Defined in [src/types/hook-definition.ts:102](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/hook-definition.ts#L102)*

___

###  AsyncSeriesHookClass

Ƭ **AsyncSeriesHookClass**: *[Constructor](README.md#constructor)‹[AsyncSeriesHook](interfaces/asyncserieshook.md)‹T1, T2, T3››*

*Defined in [src/types/hook-definition.ts:90](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/hook-definition.ts#L90)*

___

###  AsyncSeriesWaterfallHookClass

Ƭ **AsyncSeriesWaterfallHookClass**: *[Constructor](README.md#constructor)‹[AsyncSeriesWaterfallHook](interfaces/asyncserieswaterfallhook.md)‹T1, T2, T3››*

*Defined in [src/types/hook-definition.ts:113](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/hook-definition.ts#L113)*

___

###  ChunkGraph

Ƭ **ChunkGraph**: *any*

*Defined in [src/types/webpack.ts:62](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/webpack.ts#L62)*

___

###  ChunkGroup

Ƭ **ChunkGroup**: *ChunkGroup & object*

*Defined in [src/types/webpack.ts:44](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/webpack.ts#L44)*

Interface for Webpack's ChunkGroup class with some overrides to match the
ChunkGroup objects that are encountered in the extraction process.

___

###  CodeGenerationResult

Ƭ **CodeGenerationResult**: *any*

*Defined in [src/types/webpack.ts:58](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/webpack.ts#L58)*

___

###  Collection

Ƭ **Collection**: *object*

*Defined in [src/types/hook.ts:219](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/hook.ts#L219)*

Collection of hooks. Object where key is hook name and value is a
tapable.Hook instance

#### Type declaration:

* \[ **key**: *string*\]: Hook

___

###  Constructor

Ƭ **Constructor**: *A extends Array<any> ? object : object*

*Defined in [src/types/util.ts:40](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/util.ts#L40)*

___

###  ConstructorOptions

Ƭ **ConstructorOptions**: *object*

*Defined in [src/types/subclassing-classes.ts:82](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/subclassing-classes.ts#L82)*

Default options passed to MiniExtractPlugin constructor

#### Type declaration:

* **chunkFilename**? : *undefined | string*

* **filename**? : *undefined | string*

* **ignoreOrder**? : *undefined | false | true*

* **moduleFilename**? : *[ModuleFilename](README.md#modulefilename)*

___

###  DependencyClass

Ƭ **DependencyClass**: *[Constructor](README.md#constructor)‹T, A› & object*

*Defined in [src/types/subclassing-classes.ts:28](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/subclassing-classes.ts#L28)*

___

###  DependencyTemplateClass

Ƭ **DependencyTemplateClass**: *[Constructor](README.md#constructor)‹T, A› & typeof Tapable*

*Defined in [src/types/subclassing-classes.ts:19](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/subclassing-classes.ts#L19)*

___

###  FirstNRequiredTuple

Ƭ **FirstNRequiredTuple**: *TL extends 1 ? [L extends 1 | 2 | 3 | 4 | 5 ? NonNullable<T[0]> : T[0]] : TL extends 2 ? [L extends 1 | 2 | 3 | 4 | 5 ? NonNullable<T[0]> : T[0], L extends 2 | 3 | 4 | 5 ? NonNullable<T[1]> : T[1]] : TL extends 3 ? [L extends 1 | 2 | 3 | 4 | 5 ? NonNullable<T[0]> : T[0], L extends 2 | 3 | 4 | 5 ? NonNullable<T[1]> : T[1], L extends 3 | 4 | 5 ? NonNullable<T[2]> : T[2]] : TL extends 4 ? [L extends 1 | 2 | 3 | 4 | 5 ? NonNullable<T[0]> : T[0], L extends 2 | 3 | 4 | 5 ? NonNullable<T[1]> : T[1], L extends 3 | 4 | 5 ? NonNullable<T[2]> : T[2], L extends 4 | 5 ? NonNullable<T[3]> : T[3]] : TL extends 5 ? [L extends 1 | 2 | 3 | 4 | 5 ? NonNullable<T[0]> : T[0], L extends 2 | 3 | 4 | 5 ? NonNullable<T[1]> : T[1], L extends 3 | 4 | 5 ? NonNullable<T[2]> : T[2], L extends 4 | 5 ? NonNullable<T[3]> : T[3], L extends 5 ? NonNullable<T[4]> : T[4]] : TL extends number ? L extends 1 ? [NonNullable<T[0]>, any] : L extends 2 ? [NonNullable<T[0]>, NonNullable<T[1]>, any] : L extends 3 ? [NonNullable<T[0]>, NonNullable<T[1]>, NonNullable<T[2]>, any] : L extends 4 ? [NonNullable<T[0]>, NonNullable<T[1]>, NonNullable<T[2]>, NonNullable<T[3]>, any] : L extends 5 ? [NonNullable<T[0]>, NonNullable<T[1]>, NonNullable<T[2]>, NonNullable<T[3]>, NonNullable<T[4]>, any] : never : never*

*Defined in [src/types/util.ts:74](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/util.ts#L74)*

___

###  FirstNRequiredVariadicTuple

Ƭ **FirstNRequiredVariadicTuple**: *L extends 1 ? [NonNullable<T[0]>, any] : L extends 2 ? [NonNullable<T[0]>, NonNullable<T[1]>, any] : L extends 3 ? [NonNullable<T[0]>, NonNullable<T[1]>, NonNullable<T[2]>, any] : L extends 4 ? [NonNullable<T[0]>, NonNullable<T[1]>, NonNullable<T[2]>, NonNullable<T[3]>, any] : L extends 5 ? [NonNullable<T[0]>, NonNullable<T[1]>, NonNullable<T[2]>, NonNullable<T[3]>, NonNullable<T[4]>, any] : never*

*Defined in [src/types/util.ts:133](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/util.ts#L133)*

___

###  FixateArgs

Ƭ **FixateArgs**: *[ReplaceTypeInArray](README.md#replacetypeinarray)‹Parameters‹FuncT›, BaseT, T›*

*Defined in [src/types/util.ts:297](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/util.ts#L297)*

Use to get types of type-parametrized (generic) functions.

The process requires a creation of a helper class whose method
is the function fixed for a specific value of a parameter.

Taken from https://stackoverflow.com/a/60846777/9788634

**`example`** 
// Sample Function
// We want to get the type of the function for a specific type param,
// e.g. string
type ALL = string | number | object | boolean;
export function MyFunc1<T extends ALL>() {
  return {
    foo: (os : T) => {}
  }
}

// Setup
// Create a helper class whose method is cast to the type we want,
// yet still generic
class Helper <T extends ALL> {
  fixate = (...args: FixateArgs<typeof MyFunc1, ALL, T>) =>
    MyFunc1<T>(...args);
}
// Generic type of our original function.
type FixatedFunc<T extends ALL> = Helper1<T>['fixate'];

// Usage
type ForNumber1 = FixatedFunc<number> //  {foo: (os: number) => void;}

___

###  FlagExcludedType

Ƭ **FlagExcludedType**: *object*

*Defined in [src/types/util.ts:25](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/util.ts#L25)*

#### Type declaration:

___

###  GetDependency

Ƭ **GetDependency**: *InstanceType‹NonNullable‹Opts["dependencyClass"]››*

*Defined in [src/types/subclassing-util.ts:12](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/subclassing-util.ts#L12)*

Get Dependency from ClassOptions

___

###  GetDependencyOptions

Ƭ **GetDependencyOptions**: *ConstructorParameters<MEP["classOptions"]["dependencyClass"]>[0]*

*Defined in [src/types/subclassing-util.ts:19](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/subclassing-util.ts#L19)*

Get DependencyOptions type from MiniExtractPlugin type

___

###  GetHookReturnType

Ƭ **GetHookReturnType**: *ReturnType‹Taps<MEP>[H]›*

*Defined in [src/types/subclassing-util.ts:41](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/subclassing-util.ts#L41)*

Get a return type for a particular hook name, optionally for a specific
MiniExtractPlugin class

___

###  GetModule

Ƭ **GetModule**: *InstanceType‹[GetModuleClass](README.md#getmoduleclass)‹MEP››*

*Defined in [src/types/subclassing-util.ts:33](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/subclassing-util.ts#L33)*

Get module type from MiniExtractPlugin type

___

###  GetModuleClass

Ƭ **GetModuleClass**: *MEP["classOptions"]["moduleClass"]*

*Defined in [src/types/subclassing-util.ts:26](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/subclassing-util.ts#L26)*

Get module type from MiniExtractPlugin type

___

###  HookClass

Ƭ **HookClass**: *typeof Hook | typeof SyncHook | typeof SyncWaterfallHook | typeof SyncBailHook | typeof SyncLoopHook | typeof AsyncParallelHook | typeof AsyncParallelBailHook | typeof AsyncSeriesHook | typeof AsyncSeriesBailHook | typeof AsyncSeriesWaterfallHook*

*Defined in [src/types/hook-definition.ts:10](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/hook-definition.ts#L10)*

___

###  HookDefinitions

Ƭ **HookDefinitions**: *object*

*Defined in [src/types/hook-definition.ts:139](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/hook-definition.ts#L139)*

#### Type declaration:

___

###  HookInstanceFromClass

Ƭ **HookInstanceFromClass**: *T extends AsyncSeriesWaterfallHookClass ? AsyncSeriesWaterfallHook<Arg1, Arg2, Arg3> : T extends AsyncSeriesBailHookClass ? AsyncSeriesBailHook<Arg1, Arg2, Arg3> : T extends AsyncSeriesHookClass ? AsyncSeriesHook<Arg1, Arg2, Arg3> : T extends AsyncParallelBailHookClass ? AsyncParallelBailHook<Arg1, Arg2, Arg3> : T extends AsyncParallelHookClass ? AsyncParallelHook<Arg1, Arg2, Arg3> : T extends SyncLoopHookClass ? SyncLoopHook<Arg1, Arg2, Arg3> : T extends SyncBailHookClass ? SyncBailHook<Arg1, Arg2, Arg3> : T extends SyncWaterfallHookClass ? SyncWaterfallHook<Arg1, Arg2, Arg3> : T extends SyncHookClass ? SyncHook<Arg1, Arg2, Arg3> : T extends Hook ? Hook<Arg1, Arg2, Arg3> : never*

*Defined in [src/types/hook.ts:40](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/hook.ts#L40)*

Infer instance type from class type but allow to pass parameters to the
hook instance types (using InstanceType doesn't permit that)

___

###  Hooks

Ƭ **Hooks**: *object*

*Defined in [src/types/hook.ts:80](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/hook.ts#L80)*

#### Type declaration:

___

###  IfEquals

Ƭ **IfEquals**: *function extends function ? Y : N*

*Defined in [src/types/util.ts:162](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/util.ts#L162)*

___

###  LoaderContext

Ƭ **LoaderContext**: *any*

*Defined in [src/types/context.ts:10](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/context.ts#L10)*

___

###  MiniExtractPluginClass

Ƭ **MiniExtractPluginClass**: *RequiredKeys<T["options"]> extends never ? object : object*

*Defined in [src/types/subclassing.ts:99](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/subclassing.ts#L99)*

MiniExtractPlugin class

Instance type can be overriden as the first type parameter.

The type adapts whether the constructor's first argument is required based
on if the options object has any required keys.

**`example`** 
// MiniExtractPluginClass with default type
MiniExtractPluginClass
// ClassOptions with overriden MiniExtractPlugin type
MiniExtractPluginClass<MyCustomMiniExtractPlugin>

___

###  ModFactoryArgs

Ƭ **ModFactoryArgs**: *Parameters‹MF["create"]›*

*Defined in [src/models/module-factory.ts:17](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/models/module-factory.ts#L17)*

Get the create method arguments used by ModuleFactory given ModuleFactory
interface

___

###  ModFactoryModule

Ƭ **ModFactoryModule**: *Parameters<Parameters<MF["create"]>[1]>[1]*

*Defined in [src/models/module-factory.ts:22](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/models/module-factory.ts#L22)*

Get the Module used by ModuleFactory given ModuleFactory interface

___

###  ModuleClass

Ƭ **ModuleClass**: *[Constructor](README.md#constructor)‹M, A› & object*

*Defined in [src/types/subclassing-classes.ts:40](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/subclassing-classes.ts#L40)*

___

###  ModuleFactoryCallback

Ƭ **ModuleFactoryCallback**: *function*

*Defined in [src/types/subclassing-classes.ts:52](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/subclassing-classes.ts#L52)*

#### Type declaration:

▸ (`error`: Error | null, `result`: M): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | Error &#124; null |
`result` | M |

___

###  ModuleFactoryClass

Ƭ **ModuleFactoryClass**: *[Constructor](README.md#constructor)‹T› & typeof Tapable*

*Defined in [src/types/subclassing-classes.ts:75](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/subclassing-classes.ts#L75)*

___

###  ModuleFactoryData

Ƭ **ModuleFactoryData**: *object & object*

*Defined in [src/types/subclassing-classes.ts:48](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/subclassing-classes.ts#L48)*

___

###  ModuleFilename

Ƭ **ModuleFilename**: *string | [ModuleFilenameFunction](README.md#modulefilenamefunction)‹MEP›*

*Defined in [src/types/module-filename.ts:26](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/module-filename.ts#L26)*

___

###  ModuleFilenameFunction

Ƭ **ModuleFilenameFunction**: *function*

*Defined in [src/types/module-filename.ts:18](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/module-filename.ts#L18)*

moduleFilename function signature

#### Type declaration:

▸ (`context`: [RenderContext](interfaces/rendercontext.md)‹MEP›, `templateOptions`: [TemplateOptions](interfaces/templateoptions.md), `modules`: [GetModule](README.md#getmodule)‹MEP›[]): *string*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [RenderContext](interfaces/rendercontext.md)‹MEP› |
`templateOptions` | [TemplateOptions](interfaces/templateoptions.md) |
`modules` | [GetModule](README.md#getmodule)‹MEP›[] |

___

###  ModuleGraph

Ƭ **ModuleGraph**: *any*

*Defined in [src/types/webpack.ts:61](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/webpack.ts#L61)*

___

###  Omit

Ƭ **Omit**: *Pick‹T, Exclude‹keyof T, K››*

*Defined in [src/types/util.ts:15](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/util.ts#L15)*

Omit<{a: string, b: number}, 'b'> -> {a: string} - exclude object keys.

___

###  OmitType

Ƭ **OmitType**: *Pick‹Base, [AllowedNames](README.md#allowednames)‹Base, Type››*

*Defined in [src/types/util.ts:34](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/util.ts#L34)*

Omit type - exclude object keys based on types.

___

###  Override

Ƭ **Override**: *object*

*Defined in [src/types/hook.ts:204](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/hook.ts#L204)*

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

*Defined in [src/types/hook.ts:213](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/hook.ts#L213)*

List of Override objects

___

###  ParamsParse

Ƭ **ParamsParse**: *object*

*Defined in [src/types/subclassing-params.ts:28](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/subclassing-params.ts#L28)*

Parse types passed to MiniExtractPLugin class or options and fill gaps with defaults

#### Type declaration:

* **constructorOptions**: *T["constructorOptions"] extends object ? T["constructorOptions"] : ConstructorOptions*

* **dependencyClass**: *T["dependencyClass"] extends DependencyClass ? T["dependencyClass"] : DependencyClass*

* **dependencyTemplateClass**: *T["dependencyTemplateClass"] extends DependencyTemplateClass ? T["dependencyTemplateClass"] : DependencyTemplateClass*

* **moduleClass**: *T["moduleClass"] extends ModuleClass ? T["moduleClass"] : ModuleClass*

* **moduleFactoryClass**: *T["moduleFactoryClass"] extends ModuleFactoryClass ? T["moduleFactoryClass"] : ModuleFactoryClass*

___

###  PartialTaps

Ƭ **PartialTaps**: *Partial‹[Taps](README.md#taps)‹MEP››*

*Defined in [src/types/hook.ts:189](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/hook.ts#L189)*

Partial mapping of hook name to its function signature

___

###  RenderContentAssetOptions

Ƭ **RenderContentAssetOptions**: *object*

*Defined in [src/lib/render-content-asset.ts:10](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/lib/render-content-asset.ts#L10)*

#### Type declaration:

* **context**: *[RenderContext](interfaces/rendercontext.md)‹MEP›*

* **ignoreOrder**: *boolean*

* **modules**: *[GetModule](README.md#getmodule)‹MEP›[]*

___

###  RenderManifestEntry

Ƭ **RenderManifestEntry**: *object*

*Defined in [src/types/webpack.ts:68](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/webpack.ts#L68)*

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

*Defined in [src/types/webpack.ts:81](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/webpack.ts#L81)*

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

###  ReplaceType

Ƭ **ReplaceType**: *[IfEquals](README.md#ifequals)‹T, FROM_TYPE, TO_TYPE, T›*

*Defined in [src/types/util.ts:170](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/util.ts#L170)*

___

###  ReplaceTypeInArray

Ƭ **ReplaceTypeInArray**: *ARR extends [] ? [] : ARR extends [infer P0] ? [P0 extends F ? T : P0] : ARR extends [infer P0, infer P1] ? [ReplaceType<P0, F, T>, ReplaceType<P1, F, T>] : ARR extends [infer P0, infer P1, infer P2] ? [ReplaceType<P0, F, T>, ReplaceType<P1, F, T>, ReplaceType<P2, F, T>] : ARR extends [infer P0, infer P1, infer P2, infer P3] ? [ReplaceType<P0, F, T>, ReplaceType<P1, F, T>, ReplaceType<P2, F, T>, ReplaceType<P3, F, T>] : ARR extends [infer P0, infer P1, infer P2, infer P3, infer P4] ? [ReplaceType<P0, F, T>, ReplaceType<P1, F, T>, ReplaceType<P2, F, T>, ReplaceType<P3, F, T>, ReplaceType<P4, F, T>] : ARR extends [infer P0, infer P1, infer P2, infer P3, infer P4, infer P5] ? [ReplaceType<P0, F, T>, ReplaceType<P1, F, T>, ReplaceType<P2, F, T>, ReplaceType<P3, F, T>, ReplaceType<P4, F, T>, ReplaceType<P5, F, T>] : ARR extends [infer P0, infer P1, infer P2, infer P3, infer P4, infer P5, infer P6] ? [ReplaceType<P0, F, T>, ReplaceType<P1, F, T>, ReplaceType<P2, F, T>, ReplaceType<P3, F, T>, ReplaceType<P4, F, T>, ReplaceType<P5, F, T>, ReplaceType<P6, F, T>] : ARR extends [infer P0, infer P1, infer P2, infer P3, infer P4, infer P5, infer P6, infer P7] ? [ReplaceType<P0, F, T>, ReplaceType<P1, F, T>, ReplaceType<P2, F, T>, ReplaceType<P3, F, T>, ReplaceType<P4, F, T>, ReplaceType<P5, F, T>, ReplaceType<P6, F, T>, ReplaceType<P7, F, T>] : ARR extends [infer P0, infer P1, infer P2, infer P3, infer P4, infer P5, infer P6, infer P7, infer P8] ? [ReplaceType<P0, F, T>, ReplaceType<P1, F, T>, ReplaceType<P2, F, T>, ReplaceType<P3, F, T>, ReplaceType<P4, F, T>, ReplaceType<P5, F, T>, ReplaceType<P6, F, T>, ReplaceType<P7, F, T>, ReplaceType<P8, F, T>] : never*

*Defined in [src/types/util.ts:171](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/util.ts#L171)*

___

###  RequiredKeys

Ƭ **RequiredKeys**: *object[keyof T]*

*Defined in [src/types/util.ts:36](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/util.ts#L36)*

___

###  RequiredTuple

Ƭ **RequiredTuple**: *TL extends 0 ? [] : TL extends 1 ? [NonNullable<T[0]>] : TL extends 2 ? [NonNullable<T[0]>, NonNullable<T[1]>] : TL extends 3 ? [NonNullable<T[0]>, NonNullable<T[1]>, NonNullable<T[2]>] : TL extends 4 ? [NonNullable<T[0]>, NonNullable<T[1]>, NonNullable<T[2]>, NonNullable<T[3]>] : TL extends 5 ? [NonNullable<T[0]>, NonNullable<T[1]>, NonNullable<T[2]>, NonNullable<T[]>, NonNullable<T[]>] : never*

*Defined in [src/types/util.ts:51](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/util.ts#L51)*

___

###  RuntimeTemplate

Ƭ **RuntimeTemplate**: *any*

*Defined in [src/types/webpack.ts:60](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/webpack.ts#L60)*

___

###  SyncBailHookClass

Ƭ **SyncBailHookClass**: *[Constructor](README.md#constructor)‹[SyncBailHook](interfaces/syncbailhook.md)‹T1, T2, T3, THookResult››*

*Defined in [src/types/hook-definition.ts:40](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/hook-definition.ts#L40)*

___

###  SyncHookClass

Ƭ **SyncHookClass**: *[Constructor](README.md#constructor)‹[SyncHook](interfaces/synchook.md)‹T1, T2, T3››*

*Defined in [src/types/hook-definition.ts:32](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/hook-definition.ts#L32)*

___

###  SyncHookType

Ƭ **SyncHookType**: *[SyncHook](interfaces/synchook.md) | [SyncBailHook](interfaces/syncbailhook.md) | [SyncWaterfallHook](interfaces/syncwaterfallhook.md) | [SyncLoopHook](interfaces/syncloophook.md)*

*Defined in [src/types/hook.ts:74](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/hook.ts#L74)*

___

###  SyncLoopHookClass

Ƭ **SyncLoopHookClass**: *[Constructor](README.md#constructor)‹[SyncLoopHook](interfaces/syncloophook.md)‹T1, T2, T3››*

*Defined in [src/types/hook-definition.ts:59](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/hook-definition.ts#L59)*

___

###  SyncWaterfallHookClass

Ƭ **SyncWaterfallHookClass**: *[Constructor](README.md#constructor)‹[SyncWaterfallHook](interfaces/syncwaterfallhook.md)‹T1, T2, T3››*

*Defined in [src/types/hook-definition.ts:51](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/hook-definition.ts#L51)*

___

###  TapTypes

Ƭ **TapTypes**: *"tap" | "tapAsync" | "tapPromise" | "intercept"*

*Defined in [src/types/hook.ts:197](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/hook.ts#L197)*

Permitted keys to be used in `type` property of Hook Overrides.
The keys are the available methods for tapping into a tapable.Hooks.

___

###  Taps

Ƭ **Taps**: *object*

*Defined in [src/types/hook.ts:167](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/hook.ts#L167)*

Mapping of hook name to its function signature

#### Type declaration:

___

###  WithOptional

Ƭ **WithOptional**: *[Omit](README.md#omit)‹T, K› & Partial‹Pick‹T, K››*

*Defined in [src/types/util.ts:20](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/util.ts#L20)*

WithOptional<{a: string, b: number}, 'b'> -> {a: string, b?: number}

## Variables

### `Const` REGEXP_CHUNKHASH

• **REGEXP_CHUNKHASH**: *RegExp‹›* = /\[chunkhash(?::(\d+))?\]/i

*Defined in [src/methods/apply.ts:22](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/methods/apply.ts#L22)*

___

### `Const` REGEXP_CONTENTHASH

• **REGEXP_CONTENTHASH**: *RegExp‹›* = /\[contenthash(?::(\d+))?\]/i

*Defined in [src/methods/apply.ts:23](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/methods/apply.ts#L23)*

___

### `Const` REGEXP_NAME

• **REGEXP_NAME**: *RegExp‹›* = /\[name\]/i

*Defined in [src/methods/apply.ts:24](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/methods/apply.ts#L24)*

___

### `Const` TypedWebpackDep

• **TypedWebpackDep**: *typeof Dependency* = WebpackDependency

*Defined in [src/models/dependency.ts:13](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/models/dependency.ts#L13)*

___

### `Const` TypedWebpackModule

• **TypedWebpackModule**: *Module* = WebpackModule as typeof compilation.Module

*Defined in [src/models/module.ts:10](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/models/module.ts#L10)*

___

### `Const` asyncHooks

• **asyncHooks**: *AsyncParallelBailHook | AsyncSeriesWaterfallHook[]* = [
  AsyncParallelBailHook,
  AsyncParallelHook,
  AsyncSeriesBailHook,
  AsyncSeriesHook,
  AsyncSeriesWaterfallHook,
]

*Defined in [src/lib/hook.ts:23](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/lib/hook.ts#L23)*

___

### `Const` createHash

• **createHash**: *any* = webpack.util.createHash

*Defined in [src/methods/apply.ts:20](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/methods/apply.ts#L20)*

___

### `Const` debug

• **debug**: *log* = getDebugLogger()

*Defined in [src/lib/debug.ts:16](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/lib/debug.ts#L16)*

## Functions

###  apply

▸ **apply**<**MEP**>(`this`: MEP, `compiler`: Compiler): *void*

*Defined in [src/methods/apply.ts:26](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/methods/apply.ts#L26)*

**Type parameters:**

▪ **MEP**: *[MiniExtractPlugin](interfaces/miniextractplugin.md)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | MEP |
`compiler` | Compiler |

**Returns:** *void*

___

###  callTap

▸ **callTap**<**N**, **H**, **F**, **FP**, **FR**, **D**, **R**>(`__namedParameters`: object): *R*

*Defined in [src/lib/hook.ts:90](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/lib/hook.ts#L90)*

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

*Defined in [src/types/hook-definition.ts:143](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/hook-definition.ts#L143)*

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

*Defined in [src/types/helper.ts:1](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/helper.ts#L1)*

**Type parameters:**

▪ **T**: *string*

**Parameters:**

Name | Type |
------ | ------ |
`s` | T |

**Returns:** *T*

___

###  castTuple

▸ **castTuple**<**T**, **L**>(...`a`: T): *L extends 0 ? [] : L extends 1 ? [T[0]] : L extends 2 ? [T[0], T[1]] : L extends 3 ? [T[0], T[1], T[2]] : L extends 4 ? [T[0], T[1], T[2], T[3]] : L extends 5 ? [T[0], T[1], T[2], T[3], T[4]] : never*

*Defined in [src/types/helper.ts:5](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/helper.ts#L5)*

**Type parameters:**

▪ **T**: *any[]*

▪ **L**: *T["length"]*

**Parameters:**

Name | Type |
------ | ------ |
`...a` | T |

**Returns:** *L extends 0 ? [] : L extends 1 ? [T[0]] : L extends 2 ? [T[0], T[1]] : L extends 3 ? [T[0], T[1], T[2]] : L extends 4 ? [T[0], T[1], T[2], T[3]] : L extends 5 ? [T[0], T[1], T[2], T[3], T[4]] : never*

___

###  create

▸ **create**<**MEP**>(): *object*

*Defined in [src/lib/hook.ts:34](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/lib/hook.ts#L34)*

Default hooks provided by MiniExtractPlugin

**Type parameters:**

▪ **MEP**: *[MiniExtractPlugin](interfaces/miniextractplugin.md)*

**Returns:** *object*

___

###  defaultFilename

▸ **defaultFilename**(`type`: string): *string*

*Defined in [src/lib/default-filename.ts:1](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/lib/default-filename.ts#L1)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |

**Returns:** *string*

___

###  enumerate

▸ **enumerate**<**T**>(`iter`: Iterable‹T›): *Generator‹[number, T], void, unknown›*

*Defined in [src/lib/util.ts:20](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/lib/util.ts#L20)*

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

*Defined in [src/lib/module.ts:20](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/lib/module.ts#L20)*

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

*Defined in [src/lib/util.ts:52](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/lib/util.ts#L52)*

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

*Defined in [src/lib/module.ts:8](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/lib/module.ts#L8)*

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

*Defined in [src/lib/debug.ts:4](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/lib/debug.ts#L4)*

**Returns:** *log*

___

###  getDefinitions

▸ **getDefinitions**<**MEP**>(): *object*

*Defined in [src/lib/hook-definition.ts:33](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/lib/hook-definition.ts#L33)*

**Type parameters:**

▪ **MEP**: *[AbstractMiniExtractPlugin](interfaces/abstractminiextractplugin.md)*

**Returns:** *object*

* ### **afterMerge**: *object*

  * **args**: *[object, object]* = castTuple(
        {
          name: castStrLit('renderContext'),
          type: {} as RenderContext<MEP>,
        },
        {
          name: castStrLit('resultSource'),
          type: {} as Source,
        },
      )

  * **hook**(): *object*

    * **new __type**(...`__namedParameters`: [any]): *T*

  * **return**: *object*

    * **name**: *null* = null

    * **type**: *void* = undefined as void

* ### **afterRenderChunk**: *object*

  * **args**: *[object, object]* = castTuple(
        {
          name: castStrLit('renderContext'),
          type: {} as RenderContext<MEP>,
        },
        {
          name: castStrLit('renderManifestEntries'),
          type: [] as RenderManifestEntry[],
        },
      )

  * **hook**(): *object*

    * **new __type**(...`__namedParameters`: [any]): *T*

  * **return**: *object*

    * **name**: *null* = null

    * **type**: *void* = undefined as void

* ### **afterRenderMain**: *object*

  * **args**: *[object, object]* = castTuple(
        {
          name: castStrLit('renderContext'),
          type: {} as RenderContext<MEP>,
        },
        {
          name: castStrLit('renderManifestEntries'),
          type: [] as RenderManifestEntry[],
        },
      )

  * **hook**(): *object*

    * **new __type**(...`__namedParameters`: [any]): *T*

  * **return**: *object*

    * **name**: *null* = null

    * **type**: *void* = undefined as void

* ### **beforeMerge**: *object*

  * **args**: *[object, object]* = castTuple(
        {
          name: castStrLit('renderContext'),
          type: {} as RenderContext<MEP>,
        },
        {
          name: castStrLit('modules'),
          type: [] as Mod[],
        },
      )

  * **hook**(): *object*

    * **new __type**(...`__namedParameters`: [any]): *T*

  * **return**: *object*

    * **name**: *null* = null

    * **type**: = [] as Mod[]

* ### **beforeRenderChunk**: *object*

  * **args**: *[object, object]* = castTuple(
        {
          name: castStrLit('renderContext'),
          type: {} as RenderContext<MEP>,
        },
        {
          name: castStrLit('modules'),
          type: [] as Mod[],
        },
      )

  * **hook**(): *object*

    * **new __type**(...`__namedParameters`: [any]): *T*

  * **return**: *object*

    * **name**: *null* = null

    * **type**: ** = [] as Mod[] | Mod[][]

* ### **beforeRenderMain**: *object*

  * **args**: *[object, object]* = castTuple(
        {
          name: castStrLit('renderContext'),
          type: {} as RenderContext<MEP>,
        },
        {
          name: castStrLit('modules'),
          type: [] as Mod[],
        },
      )

  * **hook**(): *object*

    * **new __type**(...`__namedParameters`: [any]): *T*

  * **return**: *object*

    * **name**: *null* = null

    * **type**: ** = [] as Mod[] | Mod[][]

* ### **childCompilation**: *object*

  * **args**: *[object]* = castTuple({
        name: castStrLit('pitchCompilationContext'),
        type: {} as PitchCompilationContext<MEP>,
      })

  * **hook**(): *object*

    * **new __type**(...`__namedParameters`: [any]): *T*

  * **return**: *object*

    * **name**: *null* = null

    * **type**: *void* = undefined as void

* ### **childCompiler**: *object*

  * **args**: *[object]* = castTuple({
        name: castStrLit('pitchCompilerContext'),
        type: {} as PitchCompilerContext<MEP>,
      })

  * **hook**(): *object*

    * **new __type**(...`__namedParameters`: [any]): *T*

  * **return**: *object*

    * **name**: *null* = null

    * **type**: *void* = undefined as void

* ### **compilation**: *object*

  * **args**: *[object]* = castTuple({
        name: castStrLit('compilationContext'),
        type: {} as CompilationContext<MEP>,
      })

  * **hook**(): *object*

    * **new __type**(...`__namedParameters`: [any]): *T*

  * **return**: *object*

    * **name**: *null* = null

    * **type**: *void* = undefined as void

* ### **compiler**: *object*

  * **args**: *[object]* = castTuple({
        name: castStrLit('compilerContext'),
        type: {} as CompilerContext<MEP>,
      })

  * **hook**(): *object*

    * **new __type**(...`__namedParameters`: [any]): *T*

  * **return**: *object*

    * **name**: *null* = null

    * **type**: *void* = undefined as void

* ### **dependency**: *object*

  * **args**: *[object, object]* = castTuple(
        {
          name: castStrLit('pitchCompilationContext'),
          type: {} as PitchCompilationContext<MEP>,
        },
        {
          name: castStrLit('loaderModuleContext'),
          type: {} as LoaderModuleContext,
        },
      )

  * **hook**(): *object*

    * **new __type**(...`__namedParameters`: [any]): *T*

  * **return**: *object*

    * **name**: *null* = null

    * **type**: *ConstructorParameters<MEP["classOptions"]["dependencyClass"]>[0][]* = [] as DepOpts[]

* ### **extracted**: *object*

  * **args**: *[object, object]* = castTuple(
        {
          name: castStrLit('pitchCompilationContext'),
          type: {} as PitchCompilationContext<MEP>,
        },
        {
          name: castStrLit('remainingSource'),
          type: {} as string,
        },
      )

  * **hook**(): *object*

    * **new __type**(...`__namedParameters`: [any]): *T*

  * **return**: *object*

    * **name**: *null* = null

    * **type**: *string* = '' as string

* ### **initialize**: *object*

  * **args**: *[object, object]* = castTuple(
        {
          name: castStrLit('instance'),
          type: {} as MEP,
        },
        {
          name: castStrLit('options'),
          type: {} as MEP['options'],
        },
      )

  * **hook**(): *object*

    * **new __type**(...`__namedParameters`: [any]): *T*

  * **return**: *object*

    * **name**: *null* = null

    * **type**: *void* = undefined as void

* ### **merge**: *object*

  * **args**: *[object, object]* = castTuple(
        {
          name: castStrLit('renderContext'),
          type: {} as RenderContext<MEP>,
        },
        {
          name: castStrLit('modules'),
          type: [] as Mod[],
        },
      )

  * **hook**(): *object*

    * **new __type**(...`__namedParameters`: [any]): *T*

  * **return**: *object*

    * **name**: *null* = null

    * **type**: *Source‹›* = {} as Source

* ### **pitch**: *object*

  * **args**: *[object]* = castTuple({
        name: castStrLit('pitchContext'),
        type: {} as PitchContext<MEP>,
      })

  * **hook**(): *object*

    * **new __type**(...`__namedParameters`: [any]): *T*

  * **return**: *object*

    * **name**: *null* = null

    * **type**: *void* = undefined as void

* ### **renderChunk**: *object*

  * **args**: *[object, object]* = castTuple(
        {
          name: castStrLit('renderContext'),
          type: {} as RenderContext<MEP>,
        },
        {
          name: castStrLit('moduleGroups'),
          type: [] as Mod[][],
        },
      )

  * **hook**(): *object*

    * **new __type**(...`__namedParameters`: [any]): *T*

  * **return**: *object*

    * **name**: *null* = null

    * **type**: *object[]* = [] as RenderManifestEntry[]

* ### **renderMain**: *object*

  * **args**: *[object, object]* = castTuple(
        {
          name: castStrLit('renderContext'),
          type: {} as RenderContext<MEP>,
        },
        { name: castStrLit('moduleGroups'), type: [] as Mod[][] },
      )

  * **hook**(): *object*

    * **new __type**(...`__namedParameters`: [any]): *T*

  * **return**: *object*

    * **name**: *null* = null

    * **type**: *object[]* = [] as RenderManifestEntry[]

* ### **source**: *object*

  * **args**: *[object]* = castTuple({
        name: castStrLit('pitchCompilationContext'),
        type: {} as PitchCompilationContext<MEP>,
      })

  * **hook**(): *object*

    * **new __type**(...`__namedParameters`: [any]): *T*

  * **return**: *object*

    * **name**: *null* = null

    * **type**: *string* = '' as string

___

###  getModuleFilename

▸ **getModuleFilename**<**MEP**>(`options`: [GetModuleFilenameOptions](interfaces/getmodulefilenameoptions.md)‹MEP›): *string*

*Defined in [src/lib/get-module-filename.ts:23](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/lib/get-module-filename.ts#L23)*

Function to provide user with the chance to define module filename based on
a lot of contextual data

**Type parameters:**

▪ **MEP**: *[MiniExtractPlugin](interfaces/miniextractplugin.md)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetModuleFilenameOptions](interfaces/getmodulefilenameoptions.md)‹MEP› |

**Returns:** *string*

___

###  hooksFromDefinitions

▸ **hooksFromDefinitions**<**MEP**>(): *object*

*Defined in [src/lib/hook-definition.ts:298](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/lib/hook-definition.ts#L298)*

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

**Type parameters:**

▪ **MEP**: *[AbstractMiniExtractPlugin](interfaces/abstractminiextractplugin.md)*

**Returns:** *object*

___

###  hotLoader

▸ **hotLoader**(`content`: string | Buffer, `context`: any): *string*

*Defined in [src/lib/hot-loader.ts:4](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/lib/hot-loader.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`content` | string &#124; Buffer |
`context` | any |

**Returns:** *string*

___

###  isHookAsync

▸ **isHookAsync**(`hook`: Hook): *boolean*

*Defined in [src/lib/hook.ts:41](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/lib/hook.ts#L41)*

Determine whether the hook is an async hook

**Parameters:**

Name | Type |
------ | ------ |
`hook` | Hook |

**Returns:** *boolean*

___

### `Const` isIterOfIter

▸ **isIterOfIter**<**T**>(`m`: T): *boolean*

*Defined in [src/lib/util.ts:3](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/lib/util.ts#L3)*

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

*Defined in [src/lib/util.ts:13](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/lib/util.ts#L13)*

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

*Defined in [src/lib/util.ts:44](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/lib/util.ts#L44)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`arr` | T[] |

**Returns:** *T*

___

###  loader

▸ **loader**<**MEP**>(`this`: MEP, `loaderContext`: any, `source?`: undefined | string, `sourceMap?`: undefined | string, `data?`: any): *void*

*Defined in [src/methods/loader.ts:4](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/methods/loader.ts#L4)*

**Type parameters:**

▪ **MEP**: *[MiniExtractPlugin](interfaces/miniextractplugin.md)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | MEP |
`loaderContext` | any |
`source?` | undefined &#124; string |
`sourceMap?` | undefined &#124; string |
`data?` | any |

**Returns:** *void*

___

###  miniExtractPluginFactory

▸ **miniExtractPluginFactory**<**T**, **Params**, **ClsOpts**>(`options`: ClsOpts)

*Defined in [src/index.ts:12](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/index.ts#L12)*

**Type parameters:**

▪ **T**: *[ParamsDefault](interfaces/paramsdefault.md)*

▪ **Params**: *[ParamsParse](README.md#paramsparse)‹T›*

▪ **ClsOpts**: *[ClassOptions](interfaces/classoptions.md)‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | ClsOpts |

___

###  pitch

▸ **pitch**<**MEP**>(`this`: MEP, `loaderContext`: any, `remainingRequest`: string, `precedingRequest`: string, `data`: object): *Promise‹void›*

*Defined in [src/methods/pitch.ts:26](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/methods/pitch.ts#L26)*

**Type parameters:**

▪ **MEP**: *[MiniExtractPlugin](interfaces/miniextractplugin.md)*

**Parameters:**

Name | Type |
------ | ------ |
`this` | MEP |
`loaderContext` | any |
`remainingRequest` | string |
`precedingRequest` | string |
`data` | object |

**Returns:** *Promise‹void›*

___

###  pluginFactory

▸ **pluginFactory**<**T**>(`classOptions`: Required‹[ClassOptions](interfaces/classoptions.md)‹T››)

*Defined in [src/factory.ts:17](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/factory.ts#L17)*

**Type parameters:**

▪ **T**: *[ParamsDefault](interfaces/paramsdefault.md)*

**Parameters:**

Name | Type |
------ | ------ |
`classOptions` | Required‹[ClassOptions](interfaces/classoptions.md)‹T›› |

___

###  renameClass

▸ **renameClass**(`klass`: [Constructor](README.md#constructor)‹any›, `newName`: string): *void*

*Defined in [src/lib/util.ts:27](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/lib/util.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`klass` | [Constructor](README.md#constructor)‹any› |
`newName` | string |

**Returns:** *void*

___

###  renderContentAsset

▸ **renderContentAsset**<**MEP**>(`__namedParameters`: object): *Source*

*Defined in [src/lib/render-content-asset.ts:18](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/lib/render-content-asset.ts#L18)*

**Type parameters:**

▪ **MEP**: *[MiniExtractPlugin](interfaces/miniextractplugin.md)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`context` | [RenderContext](interfaces/rendercontext.md)‹MEP› |
`ignoreOrder` | boolean |
`modules` |  |

**Returns:** *Source*

___

###  subclass

▸ **subclass**(`__namedParameters`: object): *object & Tapable*

*Defined in [src/models/dependency-template.ts:22](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/models/dependency-template.ts#L22)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`type` | string |

**Returns:** *object & Tapable*

___

###  tapMany

▸ **tapMany**(`pluginName`: string, `hooksObj`: [Collection](README.md#collection), `overrides`: [Overrides](README.md#overrides)): *void*

*Defined in [src/lib/hook.ts:48](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/lib/hook.ts#L48)*

Tap many hooks

**Parameters:**

Name | Type |
------ | ------ |
`pluginName` | string |
`hooksObj` | [Collection](README.md#collection) |
`overrides` | [Overrides](README.md#overrides) |

**Returns:** *void*
