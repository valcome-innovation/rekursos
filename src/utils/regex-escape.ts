export function regexEscape(value: string) {
  return value.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}
