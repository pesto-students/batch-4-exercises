const isEven = number => number % 2 === 0;

function sumEvenArgs(...numbers) {
  return numbers.reduce((sum, currentValue) => {
    let newSum = sum;
    if (isEven(currentValue)) {
      newSum += currentValue;
    }
    return newSum;
  }, 0);
}

export {
  sumEvenArgs,
};
