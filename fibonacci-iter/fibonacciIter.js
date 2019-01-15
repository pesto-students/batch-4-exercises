function* fibonacciGenerator() {
  const firstValue = 1;
  let previousValue = firstValue;
  let currentValue = firstValue;
  yield firstValue;
  yield firstValue;
  while (true) {
    yield currentValue;
    const temp = currentValue;
    currentValue += previousValue;
    previousValue = temp;
  }
}

const fibonacciIter = fibonacciGenerator();

export {
  fibonacciIter,
};
