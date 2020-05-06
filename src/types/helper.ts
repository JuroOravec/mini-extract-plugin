export function castStrLit<T extends string>(s: T) {
  return s;
}

export function castTuple<T extends any[], L extends T['length']>(...a: T) {
  type Tuple = L extends 0
    ? []
    : L extends 1
    ? [T[0]]
    : L extends 2
    ? [T[0], T[1]]
    : L extends 3
    ? [T[0], T[1], T[2]]
    : L extends 4
    ? [T[0], T[1], T[2], T[3]]
    : L extends 5
    ? [T[0], T[1], T[2], T[3], T[4]]
    : never;
  return (a as any) as Tuple;
}
