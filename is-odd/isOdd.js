import { isEven } from '../is-even/isEven';
function isOdd(number) {
  return !isEven(number);
}

export {
  isOdd,
};
