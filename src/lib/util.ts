import type { Constructor, AnyFunc } from '../types/util';

export const isIterOfIter = <T>(m: T) => {
  if (!isIterable(m)) return false;
  // @ts-ignore
  for (const val of m) {
    if (!isIterable(val)) return false;
  }
  return true;
};

// https://stackoverflow.com/a/32538867/9788634
export function isIterable<T>(obj: T) {
  // checks for null and undefined
  if (obj == null) return false;
  // @ts-ignore
  return typeof obj[Symbol.iterator] === 'function';
}

export function* enumerate<T>(iter: Iterable<T>) {
  let index = 0;
  for (const item of iter) {
    yield [index++, item] as [number, T];
  }
}

export function renameClass(klass: Constructor<any>, newName: string) {
  const classAsString = klass
    .toString()
    .replace(new RegExp(klass.name, 'gu'), newName);
  Object.defineProperties(klass, {
    name: {
      get: () => newName,
    },
    toString: {
      get: () =>
        function toString() {
          return classAsString;
        },
    },
  });
}

export function lastItem<T>(arr: T[]) {
  return arr[arr.length - 1];
}

/**
 * Create a promise and expose its resolve and reject functions through
 * callables so the promise can be resolved outside of the resolve/reject scope
 */
export function exposedPromise(name: string) {
  type Resolver = {
    name: string;
    resolve: AnyFunc | null;
    reject: AnyFunc | null;
    promise: Promise<any> | null;
  };
  const resolver: Resolver = {
    name,
    resolve: null,
    reject: null,
    promise: null,
  };
  resolver.promise = new Promise((resolve, reject) => {
    resolver.resolve = () => resolve();
    resolver.reject = () => reject();
  });
  return resolver;
}
