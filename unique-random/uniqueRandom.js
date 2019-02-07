function uniqueRandom(fromVal, toVal) {
  const diff = toVal - fromVal + 1;
  let lastVal = -1;
  function getRandomVal() {
    return Math.floor(Math.random() * diff) + fromVal;
  }
  return function createRandom() {
    const newRandomVal = getRandomVal();
    if (newRandomVal !== lastVal) {
      lastVal = newRandomVal;
      return newRandomVal;
    }
    return createRandom();
  };
}

export { uniqueRandom };
