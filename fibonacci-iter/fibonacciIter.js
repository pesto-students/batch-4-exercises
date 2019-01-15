const fibonacciIter = {
  [Symbol.iterator]() {
    return {
      no1: 0,
      no2: 1,
      next() {
        const t = this.no1 + this.no2;
        this.no1 = this.no2;
        this.no2 = t;
        return { value: t, done: false };
      },
    };
  },
};

export { fibonacciIter };
