const isNumber = arg => typeof arg === 'number';
const not = cond => !cond;

function rangeIter(start, end) {
  if (not(isNumber(start))) {
    throw new TypeError(`${start} is not a number`);
  }
  if (not(isNumber(end))) {
    throw new TypeError(`${end} is not a number`);
  }

  return {
    * [Symbol.iterator]() {
      let currentNumber = start;

      while (currentNumber <= end) {
        yield currentNumber;
        currentNumber += 1;
      }
    },
  };
}

export { rangeIter };
