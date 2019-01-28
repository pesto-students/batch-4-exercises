const not = condition => !condition;
const isObject = obj => typeof obj === 'object';
const isNumber = num => typeof num === 'number';
const isDivisibleBy = divisor => number => number % divisor === 0;
const isEven = isDivisibleBy(2);
const isNegative = number => number < 0;
const isOutOfRange = (low, high) => number => number >= high || number < low;

export {
  not, isObject, isDivisibleBy, isEven, isNumber, isNegative, isOutOfRange,
};
