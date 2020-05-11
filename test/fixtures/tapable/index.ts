import hookFunctions from './hook-functions';
import hookValidators from './hook-validators';
import type { HookStateRecord } from './types';

export * as hook from './hook';
export * as overrides from './overrides';
export * as state from './state';
export * as types from './types';
export { hookFunctions };
export { hookValidators };

export function validateHookWasCalled(stateRecord: HookStateRecord) {
  const { called, calledWithArgs, expectedArgs } = stateRecord;
  expect(called).toBe(true);
  if (expectedArgs === null) {
    expect(calledWithArgs).toBeNull();
    return;
  }
  expect(calledWithArgs).not.toBeNull();
  expect(calledWithArgs!.length).toBe(expectedArgs.length);
}
