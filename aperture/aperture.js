
function aperture(tupleLength, numbersArray) {
  return numbersArray.reduce((accumulator, currentValue, currentIndex, array) => {
    if (currentIndex + tupleLength <= array.length) {
      const tuple = array.slice(currentIndex, currentIndex + tupleLength);
      const newAccumulator = [...accumulator];
      newAccumulator.push(tuple);
      return newAccumulator;
    }
    return accumulator;
  }, []);
}

export {
  aperture,
};
