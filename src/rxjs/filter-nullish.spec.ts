import { of } from 'rxjs';
import { filterNullish } from './filter-nullish';

describe('filterNullish', () => {

  it('should filter out null values from the observable', done => {
    of(1, null, 3)
      .pipe(filterNullish())
      .subscribe({
        next: val => expect(val).not.toBeNull(),
        complete: done
      });
  });

  it('should filter out undefined values from the observable', done => {
    of(1, undefined, 3)
      .pipe(filterNullish())
      .subscribe({
        next: val => expect(val).not.toBeUndefined(),
        complete: done
      });
  });

  it('should allow non-null and non-undefined values through', done => {
    const expectedValues = [1, 2, 3];

    of(1, 2, 3)
      .pipe(filterNullish())
      .subscribe({
        next: val => expect(expectedValues).toContain(val),
        complete: done
      });
  });

  it('should complete the observable without emitting if all values are null or undefined', done => {
    let emissions = 0;

    of(null, undefined)
      .pipe(filterNullish())
      .subscribe({
        next: () => emissions++,
        complete: () => {
          expect(emissions).toBe(0);
          done();
        }
      });
  });

  it('should work with mixed types and filter only null or undefined', done => {
    const expectedValues = ['a', 0, false];

    of('a', null, 0, undefined, false)
      .pipe(filterNullish())
      .subscribe({
        next: val => expect(expectedValues).toContain(val),
        complete: done
      });
  });
});
