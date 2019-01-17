const isEqualLength = (obj1, obj2) => obj1.length === obj2.length;
function hammingDistance(string1, string2) {
  if (!isEqualLength(string1, string2)) {
    throw new Error();
  }
  return string1.split('').reduce((hammingCounter, element, index) => {
    if (element !== string2[index]) {
      return hammingCounter + 1;
    }
    return hammingCounter;
  }, 0);
}

export {
  hammingDistance,
};
