import type { compilation } from 'webpack';
import type { types } from '../../../src';

export function getChunkObject(
  chunkType: string,
  mainChunk: types.webpack.Chunk | compilation.Chunk,
) {
  const obj: {
    [key: string]: number;
    [key: number]: number;
  } = {};

  for (const chunk of mainChunk.getAllAsyncChunks()) {
    for (const module of chunk.modulesIterable) {
      if (module.type !== chunkType) continue;
      if (chunk.id !== null) obj[chunk.id] = 1;
      break;
    }
  }

  return obj;
}
