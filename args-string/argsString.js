function normalizeString(string) {
  return string.replace(/{}/g, '').trim();
}
function argsString(string, array) {
  return string.includes('{}')
    ? `${array.join(' ')}${normalizeString(string)}`
    : normalizeString(string);
}

export { argsString };
