export function randomString(length: number) {
  return nextRandomChunk(length, '');
}

function nextRandomChunk(length: number,
                         value = '') {
  value += Math.random()
    .toString(32)
    .substring(2, length);

  if (value.length > length)
    return value.slice(0, length);

  return nextRandomChunk(length, value);
}
