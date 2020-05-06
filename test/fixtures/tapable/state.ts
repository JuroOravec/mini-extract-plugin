/**
 * @module test.fixtures.tapable.state Lib for working with the HookState object
 */

import pick from 'lodash.pick';
import { ActiveHooks, ActiveHookNames } from '../../../src/types/hook';
import { HookState } from './types';
import { activeHooks } from './constants';

export interface UpdateStateArgs {
  calledWith: any[];
  errors?: Error[];
}

/**
 * Creates object which tracks whether given hooks have been called and what
 * they've been called with
 */
export function create(hooks: Partial<ActiveHooks> = activeHooks) {
  return Object.entries(hooks).reduce((accum, [key, value]) => {
    accum[key as ActiveHookNames] = {
      called: false,
      calledWithArgs: null,
      errors: [],
      // _args is private property, but let's use it for checking correct arg
      // size for as long as it's available
      // @ts-ignore
      expectedArgs: value._args || null,
    };
    return accum;
  }, {} as HookState);
}

/**
 * Factory function that creates functions which will be scoped to update the
 * passed HookState object.
 */
export function recorder(stateObject: HookState) {
  /**
   * Factory function that scopes HookStateRecord update to a particular hook
   */
  return function recordHookState(hookName: ActiveHookNames) {
    /**
     * Update the record in HookState so we can detect which hooks have been
     * called and which not. This function should be called from within
     * a hook function.
     */
    return function updateState({
      calledWith = [],
      errors = [],
    }: UpdateStateArgs) {
      stateObject[hookName].called = true;
      stateObject[hookName].calledWithArgs = [...calledWith];
      stateObject[hookName].errors = [...errors];
    };
  };
}

/**
 * Reset given HookState so it can be used again for detecting which hooks have
 * been called.
 */
export function reset(stateObject: Partial<HookState>) {
  Object.values(stateObject).forEach((hookObj) => {
    hookObj!.called = false;
    hookObj!.calledWithArgs = null;
  });
}

/**
 * Return a subset of the HookState object which contains only the specified
 * hooks.
 */
export function filter(stateObject: HookState, hookNames: string[]) {
  return pick(stateObject, hookNames);
}
