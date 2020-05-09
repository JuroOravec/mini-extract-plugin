import type tapable from 'tapable';

import { definitions, hooksFromDefinitions } from '../lib/hooks-definitions';
import type { FirstNRequiredVariadicTuple, AnyFunc, OmitType } from './util';
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
} from './hooks-definition';

export * from './hooks-definition';

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

export type ActiveHookDefinitions = typeof definitions;

const hooks = hooksFromDefinitions() as Hooks<ActiveHookDefinitions>;

/**
 * Hooks type that infers to the defined hooks.
 */
export type ActiveHooks = typeof hooks;
/**
 * Union of the names of the defined hooks.
 */
export type ActiveHookNames = keyof ActiveHooks;

/**
 * Async hooks of ActiveHooks
 */
export type ActiveAsyncHooks = OmitType<ActiveHooks, SyncHookType>;
/**
 * Union of the names of the defined async hooks.
 */
export type ActiveAsyncHookNames = keyof ActiveAsyncHooks;

/**
 * Sync hooks of ActiveHooks
 */
export type ActiveSyncHooks = OmitType<ActiveHooks, AsyncHookType>;
/**
 * Union of the names of the defined sync hooks.
 */
export type ActiveSyncHookNames = keyof ActiveSyncHooks;

/**
 * Mapping of hook name to its function signature
 */
export type Taps<
  D extends ActiveHookDefinitions = ActiveHookDefinitions,
  H extends ActiveHooks = ActiveHooks,
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
export type PartialTaps = Partial<Taps>;

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
