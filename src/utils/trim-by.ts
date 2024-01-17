import { regexEscape } from './regex-escape';

export function trimBy(value: string,
                       trimmer: string): string {
  const escapedTrimmer = regexEscape(trimmer);

  return value
    .replace(new RegExp(`^${escapedTrimmer}+`), '')
    .replace(new RegExp(`${escapedTrimmer}+$`), '');
}


