import { memoize } from './memoize';

describe('Memoize', () => {
  it('returns the same result for the same arguments', () => {
    const fn = jest.fn((x: number) => x * 2);
    const memoizedFn = memoize(fn);

    expect(memoizedFn(2)).toBe(4);
    expect(memoizedFn(2)).toBe(4);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('returns different results for different arguments', () => {
    const fn = jest.fn((x: number) => x * 2);
    const memoizedFn = memoize(fn);

    expect(memoizedFn(2)).toBe(4);
    expect(memoizedFn(3)).toBe(6);
    expect(fn).toHaveBeenCalledTimes(2);
  });

  it('handles multiple arguments correctly', () => {
    const fn = jest.fn((x: number, y: number) => x + y);
    const memoizedFn = memoize(fn);

    expect(memoizedFn(1, 2)).toBe(3);
    expect(memoizedFn(1, 2)).toBe(3);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('caches results based on arguments', () => {
    const fn = jest.fn((x: number) => x * 2);
    const memoizedFn = memoize(fn);

    memoizedFn(2);
    memoizedFn(2);
    memoizedFn(3);
    memoizedFn(3);

    expect(fn).toHaveBeenCalledTimes(2);
  });

  it('does not cache results for different arguments', () => {
    const fn = jest.fn((x: number) => x * 2);
    const memoizedFn = memoize(fn);

    memoizedFn(2);
    memoizedFn(3);
    memoizedFn(4);

    expect(fn).toHaveBeenCalledTimes(3);
  });
});
