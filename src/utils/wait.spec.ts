import { wait } from './wait';

describe('wait', () => {

  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('should wait', () => {
    const start = Date.now();

    wait(5_000);
    const invoked = Date.now();

    jest.runAllTimers();
    const end = Date.now();

    expect(invoked - start).toBeLessThanOrEqual(1);
    expect(end - start).toBeGreaterThanOrEqual(5_000);
  });
});
