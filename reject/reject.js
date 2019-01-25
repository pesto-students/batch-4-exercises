const not = val => !val;
function reject(predicateFn, numbers) {
  return numbers.filter(number => not(predicateFn(number)));
}

export { reject };
