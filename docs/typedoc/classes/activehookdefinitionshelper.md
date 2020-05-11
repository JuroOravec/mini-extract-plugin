[mini-extract-plugin](../README.md) › [ActiveHookDefinitionsHelper](activehookdefinitionshelper.md)

# Class: ActiveHookDefinitionsHelper <**MEP**>

Helper class to get types from generic function `getDefinitions`

See https://stackoverflow.com/a/60846777/9788634

## Type parameters

▪ **MEP**: *[AbstractMiniExtractPlugin](../interfaces/abstractminiextractplugin.md)*

## Hierarchy

* **ActiveHookDefinitionsHelper**

## Index

### Methods

* [fixate](activehookdefinitionshelper.md#fixate)

## Methods

###  fixate

▸ **fixate**(...`args`: [FixateArgs](../README.md#fixateargs)‹typeof getDefinitions, [AbstractMiniExtractPlugin](../interfaces/abstractminiextractplugin.md), MEP›): *object*

*Defined in [src/types/hook.ts:97](https://github.com/JuroOravec/mini-extract-plugin/blob/a152a2a/src/types/hook.ts#L97)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [FixateArgs](../README.md#fixateargs)‹typeof getDefinitions, [AbstractMiniExtractPlugin](../interfaces/abstractminiextractplugin.md), MEP› |

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
