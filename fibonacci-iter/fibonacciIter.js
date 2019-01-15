
function fibonacciIter(...args) {
  return args;
}
fibonacciIter[Symbol.iterator] = () => ({
  fibonaciSecondLast: 0,
  fibonaciLast: 1,
  next() {
    const newFibonaciNumber = this.fibonaciLast + this.fibonaciSecondLast;
    this.fibonaciSecondLast = this.fibonaciLast;
    this.fibonaciLast = newFibonaciNumber;
    return { value: newFibonaciNumber, done: false };
  },
});

export {
  fibonacciIter,
};
