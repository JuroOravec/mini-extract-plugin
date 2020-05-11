import type tapable from 'tapable';

import type {
  FirstNRequiredVariadicTuple,
  AnyFunc,
  OmitType,
  FixateArgs,
} from './util';
import type { AbstractMiniExtractPlugin } from './subclassing-abstract';
import type {
  HookDefinitions,
  HookDefinition,
  AsyncSeriesWaterfallHookClass,
  AsyncSeriesBailHookClass,
  AsyncSeriesHookClass,
  AsyncParallelBailHookClass,
  AsyncParallelBailHook,
  AsyncSeriesWaterfallHook,
  AsyncSeriesBailHook,
  AsyncSeriesHook,
  AsyncParallelHookClass,
  AsyncParallelHook,
  SyncLoopHookClass,
  SyncBailHookClass,
  SyncLoopHook,
  SyncBailHook,
  SyncWaterfallHookClass,
  SyncHookClass,
  SyncWaterfallHook,
  SyncHook,
} from './hook-definition';
import { hooksFromDefinitions, getDefinitions } from '../lib/hook-definition';

export * from './hook-definition';

/**
 * Infer instance type from class type but allow to pass parameters to the
 * hook instance types (using InstanceType doesn't permit that)
 */
type HookInstanceFromClass<
  T,
  Arg1 = any,
  Arg2 = any,
  Arg3 = any
> = T extends AsyncSeriesWaterfallHookClass
  ? AsyncSeriesWaterfallHook<Arg1, Arg2, Arg3>
  : T extends AsyncSeriesBailHookClass
  ? AsyncSeriesBailHook<Arg1, Arg2, Arg3>
  : T extends AsyncSeriesHookClass
  ? AsyncSeriesHook<Arg1, Arg2, Arg3>
  : T extends AsyncParallelBailHookClass
  ? AsyncParallelBailHook<Arg1, Arg2, Arg3>
  : T extends AsyncParallelHookClass
  ? AsyncParallelHook<Arg1, Arg2, Arg3>
  : T extends SyncLoopHookClass
  ? SyncLoopHook<Arg1, Arg2, Arg3>
  : T extends SyncBailHookClass
  ? SyncBailHook<Arg1, Arg2, Arg3>
  : T extends SyncWaterfallHookClass
  ? SyncWaterfallHook<Arg1, Arg2, Arg3>
  : T extends SyncHookClass
  ? SyncHook<Arg1, Arg2, Arg3>
  : T extends tapable.Hook
  ? tapable.Hook<Arg1, Arg2, Arg3>
  : never;

export type AsyncHookType =
  | AsyncParallelBailHook
  | AsyncParallelHook
  | AsyncSeriesBailHook
  | AsyncSeriesHook
  | AsyncSeriesWaterfallHook;

export type SyncHookType =
  | SyncHook
  | SyncBailHook
  | SyncWaterfallHook
  | SyncLoopHook;

export type Hooks<T extends HookDefinitions, K extends keyof T = keyof T> = {
  [Key in K]: HookInstanceFromClass<
    T[Key]['hook'],
    T[Key]['args'][0]['type'],
    T[Key]['args'][1]['type'],
    T[Key]['args'][2]['type']
  >;
};

/**
 * Helper class to get types from generic function `getDefinitions`
 *
 * See https://stackoverflow.com/a/60846777/9788634
 */
class ActiveHookDefinitionsHelper<
  MEP extends AbstractMiniExtractPlugin = AbstractMiniExtractPlugin
> {
  fixate = (
    ...args: FixateArgs<typeof getDefinitions, AbstractMiniExtractPlugin, MEP>
  ) => getDefinitions<MEP>(...args);
}

/**
 * Existing hook definitions as type.
 */
export type ActiveHookDefinitions<
  MEP extends AbstractMiniExtractPlugin = AbstractMiniExtractPlugin
> = ReturnType<ActiveHookDefinitionsHelper<MEP>['fixate']>;

/**
 * Helper class to get types from generic function `hooksFromDefinitions`
 *
 * See https://stackoverflow.com/a/60846777/9788634
 */
class ActiveHooksHelper<
  MEP extends AbstractMiniExtractPlugin = AbstractMiniExtractPlugin
> {
  fixate = (
    ...args: FixateArgs<
      typeof hooksFromDefinitions,
      AbstractMiniExtractPlugin,
      MEP
    >
  ) => hooksFromDefinitions<MEP>(...args) as Hooks<ActiveHookDefinitions<MEP>>;
}

/**
 * Tapable's Hooks by name of existing hook definitions.
 */
export type ActiveHooks<
  MEP extends AbstractMiniExtractPlugin = AbstractMiniExtractPlugin
> = ReturnType<ActiveHooksHelper<MEP>['fixate']>;

/**
 * Union of the names of the existing hook definitions.
 */
export type ActiveHookNames = keyof ActiveHooks;

/**
 * Tapable's Hooks by name of the async subset of the existing hook
 * definitions.
 */
export type ActiveAsyncHooks<
  MEP extends AbstractMiniExtractPlugin = AbstractMiniExtractPlugin
> = OmitType<ActiveHooks<MEP>, SyncHookType>;

/**
 * Union of the names of the async subset of the defined async hooks.
 */
export type ActiveAsyncHookNames = keyof ActiveAsyncHooks;

/**
 * Tapable's Hooks by name of the sync subset of the existing hook
 * definitions.
 */
export type ActiveSyncHooks<
  MEP extends AbstractMiniExtractPlugin = AbstractMiniExtractPlugin
> = OmitType<ActiveHooks<MEP>, AsyncHookType>;

/**
 * Union of the names of the sync subset of the defined async hooks.
 */
export type ActiveSyncHookNames = keyof ActiveSyncHooks;

/**
 * Mapping of hook name to its function signature
 */
export type Taps<
  MEP extends AbstractMiniExtractPlugin = AbstractMiniExtractPlugin,
  D extends ActiveHookDefinitions<MEP> = ActiveHookDefinitions<MEP>,
  H extends ActiveHooks<MEP> = ActiveHooks<MEP>,
  DK extends keyof D & keyof H = keyof D & keyof H
> = {
  [K in DK]: H[K] extends tapable.Hook
    ? (
        ...args: FirstNRequiredVariadicTuple<
          //
          3,
          Parameters<H[K]['call']>
        >
      ) => D[K] extends HookDefinition
        ? D[K]['return']['type'] //
        : undefined
    : undefined;
};

/**
 * Partial mapping of hook name to its function signature
 */
export type PartialTaps<
  MEP extends AbstractMiniExtractPlugin = AbstractMiniExtractPlugin
> = Partial<Taps<MEP>>;

/**
 * Permitted keys to be used in `type` property of Hook Overrides.
 * The keys are the available methods for tapping into a tapable.Hooks.
 */
export type TapTypes = 'tap' | 'tapAsync' | 'tapPromise' | 'intercept';

/**
 * Hook override object, describing which MiniExtractPlugin hook should be
 * tapped, the tapable.Hook method used for tapping, and what functions should
 * be tapped to that hook.
 */
export type Override = {
  name: ActiveHookNames;
  type: TapTypes;
  hooks: Array<AnyFunc>;
};

/**
 * List of Override objects
 */
export type Overrides = Override[];

/**
 * Collection of hooks. Object where key is hook name and value is a
 * tapable.Hook instance
 */
export type Collection = {
  [key: string]: tapable.Hook;
};
