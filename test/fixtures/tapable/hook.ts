/**
 * @module test.fixtures.tapable.hook Lib for working with tapable.Hook's
 */

import { SyncHook, AsyncParallelHook, AsyncSeriesHook } from 'tapable';
import partition from 'lodash.partition';

import type { Collection } from '../../../src/types/hook';

/**
 * tapable.Hook types whose return values are ignored.
 */
const voidHooks = [SyncHook, AsyncParallelHook, AsyncSeriesHook];

/**
 * Check if the tapable.Hook is a void hook - meaning that the return value of
 * the tapped functions is ignored.
 */
export function isVoid(hook: any) {
  return voidHooks.some((klass) => hook instanceof klass);
}

/**
 * Transform an object of tapable.Hook's to two groups:
 *
 * `void` hooks - hooks where the return value of the tapped functions
 * is ignored
 *
 * `return` hooks - hooks whose return value is not ignored
 *
 * Either category contains list of `{name, hook}` objects
 */
export function groupByReturnType(hooks: Collection) {
  const [voidHooks, returningHooks] = partition(
    Object.entries(hooks),
    ([name, hook]) => isVoid(hook),
  ).map((hookCollection) =>
    // convert from array to object
    hookCollection.map(([name, hook]) => ({
      name,
      hook,
    })),
  );
  return {
    return: returningHooks,
    void: voidHooks,
  };
}

/**
 * Transform an object of tapable.Hook's to two groups:
 *
 * `void` hooks - hooks where the return value of the tapped functions
 * is ignored
 *
 * `return` hooks - hooks whose return value is not ignored
 *
 * Same as `groupByReturnType` but returns only the hook names, not the objects
 */
export function groupNamesByReturnType(hooks: Collection) {
  const { void: voidHooks, return: returnHooks } = groupByReturnType(hooks);
  return {
    return: returnHooks.map(({ name }) => name),
    void: voidHooks.map(({ name }) => name),
  };
}
