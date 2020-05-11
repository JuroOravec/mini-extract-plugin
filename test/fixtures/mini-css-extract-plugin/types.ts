import { types, Dependency } from '../../../src';

export interface CssDependency extends types.Dependency {
  media?: string;
  sourceMap?: string;
}

export type DependencyOptions = types.DependencyOptions & {
  media: string;
  sourceMap: string;
};

type DepCtorParams = ConstructorParameters<typeof Dependency>;
export type DependencyParams = [
  DependencyOptions,
  DepCtorParams[1],
  DepCtorParams[2],
];

export type CssDependencyClass = types.DependencyClass<
  CssDependency,
  DependencyParams
>;

export interface CssModule extends types.Module {
  media?: string;
  sourceMap?: string;
}

export type CssModuleClass = types.ModuleClass<CssModule>;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CssModuleFactory extends types.ModuleFactory {}

export type CssModuleFactoryClass = types.ModuleFactoryClass<CssModuleFactory>;

export type ClassParams = {
  dependencyClass: CssDependencyClass;
  moduleClass: CssModuleClass;
  moduleFactoryClass: CssModuleFactoryClass;
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MiniCssExtractPlugin
  extends types.MiniExtractPlugin<ClassParams> {}

export type Taps = types.hook.Taps<MiniCssExtractPlugin>;

// Tail<T> returns a tuple with the first element removed
// so Tail<[1, 2, 3]> is [2, 3]
// (works by using rest tuples)
export type Tail<T extends any[]> = ((...t: T) => void) extends (
  h: any,
  ...r: infer R
) => void
  ? R
  : never;
