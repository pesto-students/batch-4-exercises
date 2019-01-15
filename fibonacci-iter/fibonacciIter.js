const fibonacciIter = {
  [Symbol.iterator]() {
    let previousVal = 0;
    let currentVal = 1;
    return {
      next() {
        const newFiboVal = previousVal + currentVal;
        previousVal = currentVal;
        currentVal = newFiboVal;
        return { value: newFiboVal, done: false };
      },
    };
  },
};

export { fibonacciIter };
