import { ActiveHookNames } from '../../../src/types/hook';

export interface HookStateRecord<> {
  called: boolean;
  calledWithArgs: any[] | null;
  expectedArgs: string[] | null;
  errors: Error[];
}

export type HookState = {
  [key in ActiveHookNames]: HookStateRecord;
};
