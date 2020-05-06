import NativeModule from 'module';

import type { Module } from '../types/subclassing';

/**
 * Find module by ID from a list of modules
 */
export function findById<T extends Module>(modules: T[], id: string) {
  for (const module of modules) {
    if (module.id === id) {
      return module;
    }
  }
  return null;
}

/**
 * Evaluate module's source code
 */
export function evalCode(loaderContext: any, code: string, filename: string) {
  const module = new NativeModule(filename, loaderContext);

  // @ts-ignore
  module.paths = NativeModule._nodeModulePaths(loaderContext.context); // eslint-disable-line no-underscore-dangle
  module.filename = filename;
  // @ts-ignore
  module._compile(code, filename); // eslint-disable-line no-underscore-dangle

  return module.exports;
}
