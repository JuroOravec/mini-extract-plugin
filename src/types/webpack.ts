/**
 * Types shimming Webpack types
 */

import type { compilation, SortableSet } from 'webpack';
import type { Source } from 'webpack-sources';

import type { ModuleBase } from './base';

/**
 * Interface for Webpack's Module class with some overrides to match the Module
 * objects that are encountered in the extraction process.
 */
export interface Module extends ModuleBase {
  _miniExtractType: string;
  _moduleType: string;
  index2: number;
  updateHash: (hash: Hash) => void;
  readableIdentifier: (shortener: RequestShortener) => string;
  loaders: Array<object>;
  identifier: () => string;
  request: string;
}

/**
 * Interface for the Hash object used in Webpack.
 */
export interface Hash {
  update(data: string | Buffer, inputEncoding?: string): this;
  digest(encoding: string): string;
}

/**
 * Interface for the RequestShortener object used in Webpack.
 */
export interface RequestShortener {
  shorten: (s: string) => string;
}

/**
 * Interface for Webpack's ChunkGroup class with some overrides to match the
 * ChunkGroup objects that are encountered in the extraction process.
 */
export type ChunkGroup = compilation.ChunkGroup & {
  getModuleIndex2: (module: Module) => number;
  name: string;
};

/**
 * Interface for Webpack's Chunk class with some overrides to match the Chunk
 * objects that are encountered in the extraction process.
 */
export interface Chunk extends compilation.Chunk {
  contentHash: { [key: string]: string };
  groupsIterable: SortableSet<ChunkGroup>;
}

export type CodeGenerationResult = any;
export type DependencyTemplate = any;
export type RuntimeTemplate = any;
export type ModuleGraph = any;
export type ChunkGraph = any;

/**
 * Replace with webpack-provided types once on webpack v5
 * See https://github.com/webpack/webpack/blob/ec12ab73616cc9991bd06ab789e4b0be7646f2d4/lib/Template.js
 */
export type RenderManifestEntry = {
  render: () => Source;
  filenameTemplate: string | ((pathData: any, info?: any) => string);
  pathOptions?: any;
  identifier: string;
  hash?: string;
  auxiliary?: boolean;
};

/**
 * Replace with webpack-provided types once on webpack v5
 * See https://github.com/webpack/webpack/blob/ec12ab73616cc9991bd06ab789e4b0be7646f2d4/lib/Template.js
 */
export type RenderManifestOptions = {
  chunk: Chunk;
  hash: string;
  fullHash: string;
  outputOptions: any;
  codeGenerationResults: Map<Module, CodeGenerationResult>;
  moduleTemplates: { javascript: compilation.ModuleTemplate };
  dependencyTemplates: DependencyTemplate[];
  runtimeTemplate: RuntimeTemplate;
  moduleGraph: ModuleGraph;
  chunkGraph: ChunkGraph;
};
