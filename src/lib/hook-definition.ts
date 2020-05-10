import {
  SyncHook,
  SyncWaterfallHook,
  AsyncParallelHook,
  AsyncSeriesWaterfallHook,
} from 'tapable';
import type webpack from 'webpack';
import type { Source } from 'webpack-sources';

import type {
  CompilationContext,
  CompilerContext,
  PitchContext,
  LoaderModuleContext,
  PitchCompilerContext,
  PitchCompilationContext,
  DependencyOptions,
  RenderContext,
} from '../types/context';
import type { Module, RenderManifestEntry } from '../types/webpack';
import type { MiniExtractPlugin } from '../types/subclassing';
import { castTuple, castStrLit } from '../types/helper';
import {
  castHookDefinitions,
  SyncHookClass,
  SyncWaterfallHookClass,
  AsyncParallelHookClass,
  AsyncSeriesWaterfallHookClass,
} from '../types/hook-definition';

export const definitions = castHookDefinitions({
  initialize: {
    hook: SyncHook as SyncHookClass,
    args: castTuple(
      {
        name: castStrLit('instance'),
        type: {} as MiniExtractPlugin,
      },
      {
        name: castStrLit('options'),
        type: {} as object,
      },
    ),
    return: { name: null, type: undefined as void },
  },

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

  extracted: {
    hook: SyncWaterfallHook as SyncWaterfallHookClass,
    args: castTuple(
      {
        name: castStrLit('pitchCompilationContext'),
        type: {} as PitchCompilationContext,
      },
      {
        name: castStrLit('remainingSource'),
        type: {} as string,
      },
    ),
    return: { name: null, type: '' as string },
  },
});

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
export function hooksFromDefinitions() {
  return Object.entries(definitions).reduce((hooksObj, [key, hookDef]) => {
    // @ts-ignore
    const hookArgs = hookDef.args.map((arg) => arg.name);
    // @ts-ignore
    hooksObj[key] = new hookDef.hook(hookArgs);
    return hooksObj;
  }, {});
}
