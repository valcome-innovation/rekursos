import { randomString } from './random-string';

describe('randomString', () => {

  it('should return random string with given length', () => {
    const string = randomString(100);

    expect(string.length).toEqual(100);
  });

  it('should return random string', () => {
    const string1 = randomString(10);
    const string2 = randomString(10);

    expect(string1).not.toEqual(string2);
  });
});
