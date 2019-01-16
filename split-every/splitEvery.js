function splitEvery(chunkLength, iterable) {
  if (chunkLength <= 0) {
    throw new Error('Chunk length expected to be positive');
  }

  const splitedArray = Array.from(iterable).reduce((accumulator, current) => {
    if (accumulator.length === 0 || accumulator[accumulator.length - 1].length === chunkLength) {
      return [...accumulator, [current]];
    }
    accumulator[accumulator.length - 1].push(current);
    return accumulator;
  }, []);

  if (typeof iterable === 'string') {
    return splitedArray.map(chunk => chunk.join(''));
  }
  return splitedArray;
}

export { splitEvery };
