// https://de.wikipedia.org/wiki/Memoisation
export function memoize<T, Args extends unknown[] = unknown[]>(
  fn: (...args: Args) => T
): (...args: Args) => T {

  const cache = new Map<string, T>();

  return (...args: Args) => {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key)!;
    }

    const result = fn(...args);
    cache.set(key, result);

    return result;
  };
}
