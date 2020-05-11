/**
 * @module test.fixtures.tapable.hook Lib for working with HookOverrides.
 *
 * HookOverrides is a list of objects defining which hooks should be tapped
 * with what functions when a new MiniExtractPlugin class is created.
 */

import type { types } from '../../../src';
import type { HookState } from './types';
import flat from '../../lib/flat';
import { recorder } from './state';
import { activeHooks } from './constants';
import hookFunctions from './hook-functions';
import hookValidators from './hook-validators';

/**
 * Generate HookOverrides that will, for each hook given, record to HookState
 * whether a hook has been called and what arguments it has been called with.
 */
export function recordAll(
  stateObject: HookState,
  hooks: Partial<types.hook.ActiveHooks> = activeHooks,
  overrides: types.hook.Overrides = [],
) {
  const recordHookState = recorder(stateObject);
  return Object.keys(hooks).map((key) => {
    const updateState = recordHookState(key as types.hook.ActiveHookNames);
    // Find functions that should be called for this hook and call them
    // before we record that the
    const hookOverrides = flat(
      overrides.filter(({ name }) => name === key).map(({ hooks }) => hooks),
    );
    // Wrap the updating of state and sequential calling of tapped functions
    // so the hooks that may need a value to be returned can be introspected
    function hookFn(...args: any[]) {
      try {
        const processed = hookOverrides.reduce(
          (prevReturnVal, fn) => [fn(...prevReturnVal)],
          args,
        );
        updateState({ calledWith: args });
        return processed[0];
      } catch (err) {
        updateState({ calledWith: args, errors: [err] });
        throw err;
      }
    }
    const override: types.hook.Override = {
      name: key as types.hook.ActiveHookNames,
      type: 'tap',
      hooks: [hookFn],
    };
    return override;
  });
}

/**
 * Create sets of different HookOverride's (functions that will tap into
 * MiniExtractPlugin hooks) for different test conditions. The overrides will
 * record whether the hooks have been called, and in some cases will call
 * default behaviour so the hooks return the value it is expected to return.
 *
 * - `noDefaults` - overrides that only record if the hook has been called.
 *   return undefined.
 *
 * - `withDefaults` - overrides that record if the hook has been called but
 * also call function implementing the default behaviour, so the functions that
 * are expected to return something will return correct values.
 *
 * - `withValidators` - overrides that validate whether the arguments passed to
 * the functions are of correct type and have correct values. Also calls
 * functions with default bahaviour as in the case of `withDefaults`.
 *
 */
export function create(
  stateObject: HookState,
  hooks: Partial<types.hook.ActiveHooks> = activeHooks,
) {
  const validatorHookOverrides: types.hook.Override[] = Object.keys(hooks).map(
    (hookName) => {
      const typedName = hookName as keyof types.hook.Taps;
      const validator = hookValidators[typedName];
      if (!validator) {
        throw Error(`Validator for hook ${typedName} is missing`);
      }
      const hookFn = hookFunctions[typedName];
      function hookFunction(...args: any) {
        validator(...args);
        return hookFn ? hookFn(...args) : undefined;
      }
      return {
        name: hookName as types.hook.ActiveHookNames,
        type: 'tap',
        hooks: [hookFunction],
      };
    },
  );

  const defaultHookOverrides: types.hook.Override[] = Object.keys(hooks).map(
    (hookName) => {
      const hookFn = hookFunctions[hookName as keyof types.hook.Taps];
      const hookFns = hookFn ? [hookFn] : [];
      return {
        name: hookName as types.hook.ActiveHookNames,
        type: 'tap',
        hooks: hookFns,
      };
    },
  );

  const hookOverrides = {
    noDefaults: recordAll(stateObject, hooks),
    withDefaults: recordAll(stateObject, hooks, defaultHookOverrides),
    withValidators: recordAll(stateObject, hooks, validatorHookOverrides),
  };
  return hookOverrides;
}

/**
 * Filter a list of HookOverride's to contain only the entries where the
 * name of the hook that the override is targetting is in the given array of
 * names.
 */
export function filter(overrides: types.hook.Overrides, hookNames: string[]) {
  return overrides.filter(({ name }) => hookNames.includes(name));
}
