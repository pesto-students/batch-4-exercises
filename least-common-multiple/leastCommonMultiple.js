const isLCM = (guess, num1, num2) => guess % num1 === 0 && guess % num2 === 0;

function leastCommonMultiple(num1, num2) {
  // find larger of two numbers, remove negative signs if any
  const [smaller, bigger] = [Math.abs(num1), Math.abs(num2)].sort();

  const smallestPossibleLCM = bigger;

  const biggestPossibleLCM = smaller * bigger;

  for (let guess = smallestPossibleLCM; guess <= biggestPossibleLCM; guess += 1) {
    if (isLCM(guess, num1, num2)) {
      return guess;
    }
  }

  return biggestPossibleLCM;
}

export { leastCommonMultiple };
