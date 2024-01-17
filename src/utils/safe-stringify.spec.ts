import { safeStringify } from './safe-stringify';

describe('safeStringify', () => {

  it('should stringify safe', () => {
    const a: any = { a: 1 };
    const b: any = { b: 2 };
    a.b = b;
    b.b = a;

    const actual = safeStringify(a);

    expect(actual).toEqual('{"a":1,"b":{"b":"[Circular]"}}');
  });
});
