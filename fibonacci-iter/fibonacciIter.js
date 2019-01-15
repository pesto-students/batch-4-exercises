function* fibonacciGenerator() {
  yield 1;
  let prevValue = 0;
  let currentValue = 1;
  let temp = 0;
  while (true) {
    yield currentValue;
    temp = currentValue + prevValue;
    prevValue = currentValue;
    currentValue = temp;
  }
}

const fibonacciIter = fibonacciGenerator();

export {
  fibonacciIter,
};
