export function safeStringify(object: string) {
  const safeStringifyReplacer = (seen: WeakSet<any>) => {
    return function (key: string, value: any) {
      if (!(value !== null && typeof value === 'object')) {
        return value;
      }

      if (seen.has(value)) {
        return '[Circular]';
      }

      seen.add(value);

      const newValue: any = Array.isArray(value) ? [] : {};

      for (const [key2, value2] of Object.entries(value)) {
        newValue[key2] = safeStringifyReplacer(seen)(key2, value2);
      }

      seen.delete(value);

      return newValue;
    };
  };

  const seen = new WeakSet();

  return JSON.stringify(
    object,
    safeStringifyReplacer(seen)
  );
}
