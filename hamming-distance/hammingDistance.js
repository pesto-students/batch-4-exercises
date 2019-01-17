const lengthsDiffer = (wordOne, wordTwo) => wordOne.length !== wordTwo.length;

function hammingDistance(wordOne, wordTwo) {
  if (lengthsDiffer(wordOne, wordTwo)) {
    throw new Error('Words should be same length');
  }

  return Array.from(wordOne).reduce((accumulator, currentChar, index) => {
    if (currentChar !== wordTwo[index]) {
      return accumulator + 1;
    }
    return accumulator;
  }, 0);
}

export { hammingDistance };
