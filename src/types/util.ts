/**
 * General util types
 */

/**
 * Generalized function type that can be used anywhere where signature is not
 * important. Unlike Function class, this type is compatible with typed
 * signatures.
 */
export type AnyFunc = (...args: any[]) => any;

/**
 * Omit<{a: string, b: number}, 'b'> -> {a: string} - exclude object keys.
 */
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

/**
 * WithOptional<{a: string, b: number}, 'b'> -> {a: string, b?: number}
 */
export type WithOptional<T, K extends keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>;

// Omit type consists of three steps:
// 1 Transform the type to flag all the undesired keys as 'never'
type FlagExcludedType<Base, Type> = {
  [Key in keyof Base]: Base[Key] extends Type ? never : Key;
};
// 2 Get the keys that are not flagged as 'never'
type AllowedNames<Base, Type> = FlagExcludedType<Base, Type>[keyof Base];
// 3 Use this with a simple Pick to get the right interface, excluding the undesired type
/**
 * Omit type - exclude object keys based on types.
 */
export type OmitType<Base, Type> = Pick<Base, AllowedNames<Base, Type>>;

export type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K;
}[keyof T];

export type Constructor<
  T,
  A extends Array<any> | undefined = any[]
> = A extends Array<any>
  ? {
      new (...[args]: A): T;
    }
  : {
      new (): T;
    };

export type RequiredTuple<
  T extends any[],
  TL extends T['length'] = T['length']
> = TL extends 0
  ? []
  : TL extends 1
  ? [NonNullable<T[0]>]
  : TL extends 2
  ? [NonNullable<T[0]>, NonNullable<T[1]>]
  : TL extends 3
  ? [NonNullable<T[0]>, NonNullable<T[1]>, NonNullable<T[2]>]
  : TL extends 4
  ? [NonNullable<T[0]>, NonNullable<T[1]>, NonNullable<T[2]>, NonNullable<T[3]>]
  : TL extends 5
  ? [
      NonNullable<T[0]>,
      NonNullable<T[1]>,
      NonNullable<T[2]>,
      NonNullable<T[]>,
      NonNullable<T[]>,
    ]
  : never;

export type FirstNRequiredTuple<
  L extends 1 | 2 | 3 | 4 | 5 | number,
  T extends any[],
  TL extends T['length'] = T['length']
> = TL extends 1
  ? [L extends 1 | 2 | 3 | 4 | 5 ? NonNullable<T[0]> : T[0]]
  : TL extends 2
  ? [
      L extends 1 | 2 | 3 | 4 | 5 ? NonNullable<T[0]> : T[0],
      L extends 2 | 3 | 4 | 5 ? NonNullable<T[1]> : T[1],
    ]
  : TL extends 3
  ? [
      L extends 1 | 2 | 3 | 4 | 5 ? NonNullable<T[0]> : T[0],
      L extends 2 | 3 | 4 | 5 ? NonNullable<T[1]> : T[1],
      L extends 3 | 4 | 5 ? NonNullable<T[2]> : T[2],
    ]
  : TL extends 4
  ? [
      L extends 1 | 2 | 3 | 4 | 5 ? NonNullable<T[0]> : T[0],
      L extends 2 | 3 | 4 | 5 ? NonNullable<T[1]> : T[1],
      L extends 3 | 4 | 5 ? NonNullable<T[2]> : T[2],
      L extends 4 | 5 ? NonNullable<T[3]> : T[3],
    ]
  : TL extends 5
  ? [
      L extends 1 | 2 | 3 | 4 | 5 ? NonNullable<T[0]> : T[0],
      L extends 2 | 3 | 4 | 5 ? NonNullable<T[1]> : T[1],
      L extends 3 | 4 | 5 ? NonNullable<T[2]> : T[2],
      L extends 4 | 5 ? NonNullable<T[3]> : T[3],
      L extends 5 ? NonNullable<T[4]> : T[4],
    ]
  : TL extends number
  ? L extends 1
    ? [NonNullable<T[0]>, ...any[]]
    : L extends 2
    ? [NonNullable<T[0]>, NonNullable<T[1]>, ...any[]]
    : L extends 3
    ? [NonNullable<T[0]>, NonNullable<T[1]>, NonNullable<T[2]>, ...any[]]
    : L extends 4
    ? [
        NonNullable<T[0]>,
        NonNullable<T[1]>,
        NonNullable<T[2]>,
        NonNullable<T[3]>,
        ...any[]
      ]
    : L extends 5
    ? [
        NonNullable<T[0]>,
        NonNullable<T[1]>,
        NonNullable<T[2]>,
        NonNullable<T[3]>,
        NonNullable<T[4]>,
        ...any[]
      ]
    : never
  : never;

export type FirstNRequiredVariadicTuple<
  L extends number,
  T extends any[]
> = L extends 1
  ? [NonNullable<T[0]>, ...any[]]
  : L extends 2
  ? [NonNullable<T[0]>, NonNullable<T[1]>, ...any[]]
  : L extends 3
  ? [NonNullable<T[0]>, NonNullable<T[1]>, NonNullable<T[2]>, ...any[]]
  : L extends 4
  ? [
      NonNullable<T[0]>,
      NonNullable<T[1]>,
      NonNullable<T[2]>,
      NonNullable<T[3]>,
      ...any[]
    ]
  : L extends 5
  ? [
      NonNullable<T[0]>,
      NonNullable<T[1]>,
      NonNullable<T[2]>,
      NonNullable<T[3]>,
      NonNullable<T[4]>,
      ...any[]
    ]
  : never;

// From https://stackoverflow.com/a/53808212 by jcalz (https://stackoverflow.com/users/2887218)
export type IfEquals<T, U, Y = unknown, N = never> = (<G>() => G extends T
  ? 1
  : 2) extends <G>() => G extends U ? 1 : 2
  ? Y
  : N;

// Helper functions for being able to get type of a generic function.
// See https://stackoverflow.com/a/60846777/9788634
type ReplaceType<T, FROM_TYPE, TO_TYPE> = IfEquals<T, FROM_TYPE, TO_TYPE, T>;
type ReplaceTypeInArray<ARR, F, T> = ARR extends []
  ? []
  : ARR extends [infer P0]
  ? [P0 extends F ? T : P0]
  : ARR extends [infer P0, infer P1]
  ? [ReplaceType<P0, F, T>, ReplaceType<P1, F, T>]
  : ARR extends [infer P0, infer P1, infer P2]
  ? [ReplaceType<P0, F, T>, ReplaceType<P1, F, T>, ReplaceType<P2, F, T>]
  : ARR extends [infer P0, infer P1, infer P2, infer P3]
  ? [
      ReplaceType<P0, F, T>,
      ReplaceType<P1, F, T>,
      ReplaceType<P2, F, T>,
      ReplaceType<P3, F, T>,
    ]
  : ARR extends [infer P0, infer P1, infer P2, infer P3, infer P4]
  ? [
      ReplaceType<P0, F, T>,
      ReplaceType<P1, F, T>,
      ReplaceType<P2, F, T>,
      ReplaceType<P3, F, T>,
      ReplaceType<P4, F, T>,
    ]
  : ARR extends [infer P0, infer P1, infer P2, infer P3, infer P4, infer P5]
  ? [
      ReplaceType<P0, F, T>,
      ReplaceType<P1, F, T>,
      ReplaceType<P2, F, T>,
      ReplaceType<P3, F, T>,
      ReplaceType<P4, F, T>,
      ReplaceType<P5, F, T>,
    ]
  : ARR extends [
      infer P0,
      infer P1,
      infer P2,
      infer P3,
      infer P4,
      infer P5,
      infer P6,
    ]
  ? [
      ReplaceType<P0, F, T>,
      ReplaceType<P1, F, T>,
      ReplaceType<P2, F, T>,
      ReplaceType<P3, F, T>,
      ReplaceType<P4, F, T>,
      ReplaceType<P5, F, T>,
      ReplaceType<P6, F, T>,
    ]
  : ARR extends [
      infer P0,
      infer P1,
      infer P2,
      infer P3,
      infer P4,
      infer P5,
      infer P6,
      infer P7,
    ]
  ? [
      ReplaceType<P0, F, T>,
      ReplaceType<P1, F, T>,
      ReplaceType<P2, F, T>,
      ReplaceType<P3, F, T>,
      ReplaceType<P4, F, T>,
      ReplaceType<P5, F, T>,
      ReplaceType<P6, F, T>,
      ReplaceType<P7, F, T>,
    ]
  : ARR extends [
      infer P0,
      infer P1,
      infer P2,
      infer P3,
      infer P4,
      infer P5,
      infer P6,
      infer P7,
      infer P8,
    ]
  ? [
      ReplaceType<P0, F, T>,
      ReplaceType<P1, F, T>,
      ReplaceType<P2, F, T>,
      ReplaceType<P3, F, T>,
      ReplaceType<P4, F, T>,
      ReplaceType<P5, F, T>,
      ReplaceType<P6, F, T>,
      ReplaceType<P7, F, T>,
      ReplaceType<P8, F, T>,
    ]
  : never;

/**
 * Use to get types of type-parametrized (generic) functions.
 *
 * The process requires a creation of a helper class whose method
 * is the function fixed for a specific value of a parameter.
 *
 * Taken from https://stackoverflow.com/a/60846777/9788634
 *
 * @example
 * // Sample Function
 * // We want to get the type of the function for a specific type param,
 * // e.g. string
 * type ALL = string | number | object | boolean;
 * export function MyFunc1<T extends ALL>() {
 *   return {
 *     foo: (os : T) => {}
 *   }
 * }
 *
 * // Setup
 * // Create a helper class whose method is cast to the type we want,
 * // yet still generic
 * class Helper <T extends ALL> {
 *   fixate = (...args: FixateArgs<typeof MyFunc1, ALL, T>) =>
 *     MyFunc1<T>(...args);
 * }
 * // Generic type of our original function.
 * type FixatedFunc<T extends ALL> = Helper1<T>['fixate'];
 *
 * // Usage
 * type ForNumber1 = FixatedFunc<number> //  {foo: (os: number) => void;}
 */
export type FixateArgs<FuncT extends AnyFunc, BaseT, T> = ReplaceTypeInArray<
  Parameters<FuncT>,
  BaseT,
  T
>;
