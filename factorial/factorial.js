
function factorial(number) {
  let result = 1;
  let i = number;
  if (i === 0) return 1;
  while (i > 1) {
    result *= i;
    i -= 1;
  }
  return result;
}

export {
  factorial,
};
