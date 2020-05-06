/**
 * Internally shared interfaces used in multiple files and which are not part
 * of API
 */

import webpack from 'webpack';

/**
 * Shared base of the interface for Webpack's Module class with some overrides
 * to match the Module objects that are encountered in the extraction process.
 */
export interface ModuleBase extends webpack.compilation.Module {
  id: string;
  content: string;
}

export interface DependencyBase {
  miniExtractType: string;
  moduleType: string;
  identifier: string;
  context: string | null | undefined;
  content: string;
}
