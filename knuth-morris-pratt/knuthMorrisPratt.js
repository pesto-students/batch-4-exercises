/* eslint-disable guard-for-in */
function knuthMorrisPratt(string1, subString) {
  const subStringLength = subString.length;
  for (const index in string1) {
    const parsedIntegerIndex = parseInt(index, 10);
    const offset = parsedIntegerIndex + subStringLength;
    if (offset > string1.length) {
      return -1;
    }
    if (string1.slice(index, offset) === subString) {
      return parsedIntegerIndex;
    }
  }
  return -1;
}
export { knuthMorrisPratt };
