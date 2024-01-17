import { trimBy } from './trim-by';

describe('trimSlashes', () => {

  it('should trim slashes', () => {
    const path = '/path/yeah/';

    const actual = trimBy(path, '/');

    expect(actual).toEqual('path/yeah');
  });

  it('should trim multiple slashes', () => {
    const path = '//path//yeah//';

    const actual = trimBy(path, '/');

    expect(actual).toEqual('path//yeah');
  });
});
