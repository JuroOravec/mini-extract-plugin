import { Dependency, Module, types } from '../../../src';

export interface CssDependency extends Dependency {
  media?: string;
  sourceMap?: string;
}

export interface CssModule extends Module {
  media?: string;
  sourceMap?: string;
}

export type DependencyOptions = types.context.DependencyOptions & {
  media: string;
  sourceMap: string;
};

// Tail<T> returns a tuple with the first element removed
// so Tail<[1, 2, 3]> is [2, 3]
// (works by using rest tuples)
export type Tail<T extends any[]> = ((...t: T) => void) extends (
  h: any,
  ...r: infer R
) => void
  ? R
  : never;
