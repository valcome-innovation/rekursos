import { regexEscape } from './regex-escape';

describe('regexEscape', () => {

  it('should escape regex', () => {
    const value = 'a^b';

    const actual = regexEscape(value);

    expect(actual).toEqual('a\\^b');
  });
});
