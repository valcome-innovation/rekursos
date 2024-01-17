import { safeStringify } from './utils/safe-stringify';
import { trimBy } from './utils/trim-by';
import { randomString } from './utils/random-string';
import { wait } from './utils/wait';
import { regexEscape } from './utils/regex-escape';

import { UrlBuilder } from './helper/url.builder';

const Rek = {
  safeStringify,
  trimBy,
  regexEscape,
  wait,
  randomString
};

export default Rek;

export {
  UrlBuilder
};
