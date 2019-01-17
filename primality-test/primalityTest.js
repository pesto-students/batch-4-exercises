const isDivisible = (number, divisor) => number % divisor === 0;

function primalityTest(number) {
  if (number < 2) {
    return false;
  }

  const smallestDivisorToCheck = 2;
  const largestDivisorToCheck = Math.floor(Math.sqrt(number));

  for (let divisor = smallestDivisorToCheck; divisor <= largestDivisorToCheck; divisor += 1) {
    if (isDivisible(number, divisor)) {
      return false;
    }
  }

  return true;
}

export { primalityTest };
