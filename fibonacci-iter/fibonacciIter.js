
const fibonacciIter = {
  [Symbol.iterator]() {
    let formerFib = 0;
    let latterFib = 1;

    return {
      next() {
        const yieldFib = formerFib + latterFib;
        formerFib = latterFib;
        latterFib = yieldFib;

        return {
          value: yieldFib,
          done: false,
        };
      },
    };
  },
};

export {
  fibonacciIter,
};
