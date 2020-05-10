import {
  AsyncParallelBailHook,
  AsyncParallelHook,
  AsyncSeriesBailHook,
  AsyncSeriesHook,
  AsyncSeriesWaterfallHook,
  Hook,
} from 'tapable';

import debug from './debug';
import { hooksFromDefinitions } from './hook-definition';
import type {
  Collection,
  Overrides,
  ActiveHooks,
  Taps,
  ActiveHookNames,
  ActiveAsyncHookNames,
} from '../types/hook';
import type { AnyFunc } from '../types/util';

const asyncHooks = [
  AsyncParallelBailHook,
  AsyncParallelHook,
  AsyncSeriesBailHook,
  AsyncSeriesHook,
  AsyncSeriesWaterfallHook,
];

/**
 * Default hooks provided by MiniExtractPlugin
 */
export function create() {
  return hooksFromDefinitions() as ActiveHooks;
}

/**
 * Determine whether the hook is an async hook
 */
export function isHookAsync(hook: Hook) {
  return asyncHooks.some((aHook) => hook instanceof aHook);
}

/**
 * Tap many hooks
 */
export function tapMany(
  pluginName: string,
  hooksObj: Collection,
  overrides: Overrides,
) {
  for (const { name, type: tapType, hooks: hookFuncs } of overrides) {
    if (!hooksObj[name]) {
      throw Error(`Unknown hook name ${name}.`);
    }
    debug(
      `Applying ${hookFuncs.length} hook(s) ${name} (${tapType}) to ${pluginName}`,
    );
    // const argLen = definitions[name]['args'].length;
    // const normalizer = (fn: AnyFunc) => normalizeHookFn(argLen, fn);
    // for (const hookFunc of hookFuncs.map(normalizer)) {
    for (const hookFunc of hookFuncs) {
      hooksObj[name][tapType](pluginName, hookFunc);
    }
  }
}

/**
 * Calling Tapable's hooks with default value, required arguments, and type
 * checking.
 *
 * Accepts an object that specifies the hooks object, hook name, arguments, and
 * optionally default value.
 *
 * The type of function arguments, return type and default value type are
 * inferred from the hook name.
 *
 * If the hook to be called is an async hook, it is called with Hook.promise(),
 * and the return type is automatically wrapped in Promise
 *
 * @example
 * const modifiedModules = callTap({
 *   name: 'beforeRenderChunk',
 *   hooks: this.hooks,
 *   args: [compilationContext, renderManifestArgs, renderedModules],
 *   default: [renderedModules] as extWebpack.Module[][],
 * });
 */
export function callTap<
  // Name
  N extends ActiveHookNames = ActiveHookNames,
  // Hooks object
  H extends ActiveHooks = ActiveHooks,
  // Hook function signature
  F extends AnyFunc = Taps[N],
  // Hook function parameters
  FP extends Parameters<F> = Parameters<F>,
  // Hook function return
  FR extends ReturnType<F> = ReturnType<F>,
  // Default
  D extends FR = FR,
  // This function's return
  R extends N extends ActiveAsyncHookNames
    ? Promise<FR>
    : FR = N extends ActiveAsyncHookNames ? Promise<FR> : FR
>({
  name,
  hooks,
  args,
  default: defaultVal,
}: {
  name: N;
  hooks: H;
  args: FP;
  default?: D;
}): R {
  const tap = hooks[name];
  if (!tap.isUsed()) {
    debug(`Hook "${name}" is not used, using default value`);
    return defaultVal as R;
  }
  debug(`Started hook "${name}"`);
  const result = isHookAsync(tap) ? tap.promise(...args) : tap.call(...args);
  debug(`Done hook "${name}"`);
  return result as R;
}
