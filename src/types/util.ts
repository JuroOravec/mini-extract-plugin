/**
 * Generalized function type that can be used anywhere where signature is not
 * important. Unlike Function class, this type is compatible with typed
 * signatures.
 */
export type AnyFunc = (...args: any[]) => any;

/**
 * Omit<{a: string, b: number}, 'b'> -> {a: string}
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
