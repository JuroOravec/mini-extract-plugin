import {
  SyncHook,
  SyncWaterfallHook,
  AsyncParallelHook,
  AsyncSeriesWaterfallHook,
} from 'tapable';
import type { Source } from 'webpack-sources';

import type {
  CompilationContext,
  CompilerContext,
  PitchContext,
  LoaderModuleContext,
  PitchCompilerContext,
  PitchCompilationContext,
  RenderContext,
} from '../types/context';
import type { RenderManifestEntry } from '../types/webpack';
import type { AbstractMiniExtractPlugin } from '../types/subclassing-abstract';
import {
  castHookDefinitions,
  SyncHookClass,
  SyncWaterfallHookClass,
  AsyncParallelHookClass,
  AsyncSeriesWaterfallHookClass,
} from '../types/hook-definition';
import type {
  GetDependencyOptions,
  GetModule,
} from '../types/subclassing-util';
import { castTuple, castStrLit } from '../types/helper';

export function getDefinitions<
  MEP extends AbstractMiniExtractPlugin = AbstractMiniExtractPlugin
>() {
  type Mod = GetModule<MEP>;
  type DepOpts = GetDependencyOptions<MEP>;

  return castHookDefinitions({
    initialize: {
      hook: SyncHook as SyncHookClass,
      args: castTuple(
        {
          name: castStrLit('instance'),
          type: {} as MEP,
        },
        {
          name: castStrLit('options'),
          type: {} as MEP['options'],
        },
      ),
      return: { name: null, type: undefined as void },
    },

    compiler: {
      hook: SyncHook as SyncHookClass,
      args: castTuple({
        name: castStrLit('compilerContext'),
        type: {} as CompilerContext<MEP>,
      }),
      return: { name: null, type: undefined as void },
    },

    compilation: {
      hook: SyncHook as SyncHookClass,
      args: castTuple({
        name: castStrLit('compilationContext'),
        type: {} as CompilationContext<MEP>,
      }),
      return: { name: null, type: undefined as void },
    },

    beforeRenderMain: {
      hook: SyncWaterfallHook as SyncWaterfallHookClass,
      args: castTuple(
        {
          name: castStrLit('renderContext'),
          type: {} as RenderContext<MEP>,
        },
        {
          name: castStrLit('modules'),
          type: [] as Mod[],
        },
      ),
      return: {
        name: null,
        type: [] as Mod[] | Mod[][],
      },
    },

    renderMain: {
      hook: SyncWaterfallHook as SyncWaterfallHookClass,
      args: castTuple(
        {
          name: castStrLit('renderContext'),
          type: {} as RenderContext<MEP>,
        },
        { name: castStrLit('moduleGroups'), type: [] as Mod[][] },
      ),
      return: { name: null, type: [] as RenderManifestEntry[] },
    },

    afterRenderMain: {
      hook: SyncHook as SyncHookClass,
      args: castTuple(
        {
          name: castStrLit('renderContext'),
          type: {} as RenderContext<MEP>,
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
          type: {} as RenderContext<MEP>,
        },
        {
          name: castStrLit('modules'),
          type: [] as Mod[],
        },
      ),
      return: {
        name: null,
        type: [] as Mod[] | Mod[][],
      },
    },

    renderChunk: {
      hook: SyncWaterfallHook as SyncWaterfallHookClass,
      args: castTuple(
        {
          name: castStrLit('renderContext'),
          type: {} as RenderContext<MEP>,
        },
        {
          name: castStrLit('moduleGroups'),
          type: [] as Mod[][],
        },
      ),
      return: { name: null, type: [] as RenderManifestEntry[] },
    },

    afterRenderChunk: {
      hook: SyncHook as SyncHookClass,
      args: castTuple(
        {
          name: castStrLit('renderContext'),
          type: {} as RenderContext<MEP>,
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
          type: {} as RenderContext<MEP>,
        },
        {
          name: castStrLit('modules'),
          type: [] as Mod[],
        },
      ),
      return: { name: null, type: [] as Mod[] },
    },

    merge: {
      hook: SyncWaterfallHook as SyncWaterfallHookClass,
      args: castTuple(
        {
          name: castStrLit('renderContext'),
          type: {} as RenderContext<MEP>,
        },
        {
          name: castStrLit('modules'),
          type: [] as Mod[],
        },
      ),
      return: { name: null, type: {} as Source },
    },

    afterMerge: {
      hook: SyncHook as SyncHookClass,
      args: castTuple(
        {
          name: castStrLit('renderContext'),
          type: {} as RenderContext<MEP>,
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
        type: {} as PitchContext<MEP>,
      }),
      return: { name: null, type: undefined as void },
    },

    childCompiler: {
      hook: AsyncParallelHook as AsyncParallelHookClass,
      args: castTuple({
        name: castStrLit('pitchCompilerContext'),
        type: {} as PitchCompilerContext<MEP>,
      }),
      return: { name: null, type: undefined as void },
    },

    source: {
      hook: AsyncSeriesWaterfallHook as AsyncSeriesWaterfallHookClass,
      args: castTuple({
        name: castStrLit('pitchCompilationContext'),
        type: {} as PitchCompilationContext<MEP>,
      }),
      return: { name: null, type: '' as string },
    },

    childCompilation: {
      hook: SyncHook as SyncHookClass,
      args: castTuple({
        name: castStrLit('pitchCompilationContext'),
        type: {} as PitchCompilationContext<MEP>,
      }),
      return: { name: null, type: undefined as void },
    },

    dependency: {
      hook: SyncWaterfallHook as SyncWaterfallHookClass,
      args: castTuple(
        {
          name: castStrLit('pitchCompilationContext'),
          type: {} as PitchCompilationContext<MEP>,
        },
        {
          name: castStrLit('loaderModuleContext'),
          type: {} as LoaderModuleContext,
        },
      ),
      return: { name: null, type: [] as DepOpts[] },
    },

    extracted: {
      hook: SyncWaterfallHook as SyncWaterfallHookClass,
      args: castTuple(
        {
          name: castStrLit('pitchCompilationContext'),
          type: {} as PitchCompilationContext<MEP>,
        },
        {
          name: castStrLit('remainingSource'),
          type: {} as string,
        },
      ),
      return: { name: null, type: '' as string },
    },
  });
}

/**
 * Since the dependecy graph looks like this:
 * ```
 *     definitions
 *   /     |       \
 *  |     \|/       _\|
 *  |  lib/hooks <- types/hooks
 *  |
 *  | (thru lib/hooks)
 * \|/
 * other modules
 * ```
 * (Definitions are imported by both types and lib modules,
 * and in turn types module is imported by lib module)
 *
 * We need to include the function that creates Hooks from the definitions
 * here, so it can be used in types/hooks and lib/hooks without circular
 * dependency.
 */
export function hooksFromDefinitions<
  MEP extends AbstractMiniExtractPlugin = AbstractMiniExtractPlugin
>() {
  const definitions = getDefinitions<MEP>();
  return Object.entries(definitions).reduce((hooksObj, [key, hookDef]) => {
    // @ts-ignore
    const hookArgs = hookDef.args.map((arg) => arg.name);
    // @ts-ignore
    hooksObj[key] = new hookDef.hook(hookArgs);
    return hooksObj;
  }, {});
}
