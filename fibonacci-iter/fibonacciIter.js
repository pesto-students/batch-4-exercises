const fibonacciIter = {
  no1: 0,
  no2: 1,
  [Symbol.iterator]() {
    return this;
  },
  next() {
    const temp = this.no1 + this.no2;
    this.no1 = this.no2;
    this.no2 = temp;
    return { value: temp };
  },
};

export { fibonacciIter };
