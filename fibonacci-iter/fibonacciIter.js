function* generateFibonacci() {
  let firstFib = 0;
  let secondFib = 1;

  yield firstFib;
  yield secondFib;

  while (true) {
    const currentFib = firstFib + secondFib;
    yield currentFib;
    firstFib = secondFib;
    secondFib = currentFib;
  }
}

const fibonacciIter = generateFibonacci();

export { fibonacciIter };
