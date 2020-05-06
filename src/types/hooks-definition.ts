/**
 * Types used in hook definitions. Since other hook types are then inferred
 * from those definitions, these types have to be separated.
 */

import type tapable from 'tapable';

import { Constructor } from './util';

export type HookClass =
  | typeof tapable.Hook
  | typeof tapable.SyncHook
  | typeof tapable.SyncWaterfallHook
  | typeof tapable.SyncBailHook
  | typeof tapable.SyncLoopHook
  | typeof tapable.AsyncParallelHook
  | typeof tapable.AsyncParallelBailHook
  | typeof tapable.AsyncSeriesHook
  | typeof tapable.AsyncSeriesBailHook
  | typeof tapable.AsyncSeriesWaterfallHook;

/**
 * Types for original tapable.Hook classes could not be distinguished because
 * of identical interfaces, so we use the following set of dummy interfaces
 * that will correctly distinguish between different Hook classes when used
 * with `extends` keyword.
 */
export interface SyncHook<T1 = any, T2 = any, T3 = any>
  extends tapable.SyncHook<T1, T2, T3> {
  _hookID: 1;
}
export type SyncHookClass<T1 = any, T2 = any, T3 = any> = Constructor<
  SyncHook<T1, T2, T3>
>;

export interface SyncBailHook<T1 = any, T2 = any, T3 = any, THookResult = any>
  extends tapable.SyncBailHook<T1, T2, T3, THookResult> {
  _hookID: 2;
}
export type SyncBailHookClass<
  T1 = any,
  T2 = any,
  T3 = any,
  THookResult = any
> = Constructor<SyncBailHook<T1, T2, T3, THookResult>>;

export interface SyncWaterfallHook<T1 = any, T2 = any, T3 = any>
  extends tapable.SyncWaterfallHook<T1, T2, T3> {
  _hookID: 3;
}
export type SyncWaterfallHookClass<T1 = any, T2 = any, T3 = any> = Constructor<
  SyncWaterfallHook<T1, T2, T3>
>;

export interface SyncLoopHook<T1 = any, T2 = any, T3 = any>
  extends tapable.SyncLoopHook<T1, T2, T3> {
  _hookID: 4;
}
export type SyncLoopHookClass<T1 = any, T2 = any, T3 = any> = Constructor<
  SyncLoopHook<T1, T2, T3>
>;

export interface AsyncParallelHook<T1 = any, T2 = any, T3 = any>
  extends tapable.AsyncParallelHook<T1, T2, T3> {
  _hookID: 5;
}
export type AsyncParallelHookClass<T1 = any, T2 = any, T3 = any> = Constructor<
  AsyncParallelHook<T1, T2, T3>
>;

export interface AsyncParallelBailHook<
  T1 = any,
  T2 = any,
  T3 = any,
  THookResult = any
> extends tapable.AsyncParallelBailHook<T1, T2, T3, THookResult> {
  _hookID: 6;
}
export type AsyncParallelBailHookClass<
  T1 = any,
  T2 = any,
  T3 = any,
  THookResult = any
> = Constructor<AsyncParallelBailHook<T1, T2, T3, THookResult>>;

export interface AsyncSeriesHook<T1 = any, T2 = any, T3 = any>
  extends tapable.AsyncSeriesHook<T1, T2, T3> {
  _hookID: 7;
}
export type AsyncSeriesHookClass<T1 = any, T2 = any, T3 = any> = Constructor<
  AsyncSeriesHook<T1, T2, T3>
>;

export interface AsyncSeriesBailHook<
  T1 = any,
  T2 = any,
  T3 = any,
  THookResult = any
> extends tapable.AsyncSeriesBailHook<T1, T2, T3, THookResult> {
  _hookID: 8;
}
export type AsyncSeriesBailHookClass<
  T1 = any,
  T2 = any,
  T3 = any,
  THookResult = any
> = Constructor<AsyncSeriesBailHook<T1, T2, T3, THookResult>>;

export interface AsyncSeriesWaterfallHook<T1 = any, T2 = any, T3 = any>
  extends tapable.AsyncSeriesWaterfallHook<T1, T2, T3> {
  _hookID: 9;
}
export type AsyncSeriesWaterfallHookClass<
  T1 = any,
  T2 = any,
  T3 = any
> = Constructor<AsyncSeriesWaterfallHook<T1, T2, T3>>;

/**
 * Hooks definition object
 */

export interface HookDefinitionArg {
  name: string;
  type: any;
}

export interface HookDefinitionReturn {
  name?: null;
  type: any;
}

export interface HookDefinition<H extends HookClass = HookClass> {
  hook: H;
  args: HookDefinitionArg[];
  return: HookDefinitionReturn;
}

export type HookDefinitions<T = any> = {
  [Key in keyof T]: HookDefinition;
};

export function castHookDefinitions<T extends HookDefinitions>(definitions: T) {
  return definitions;
}
