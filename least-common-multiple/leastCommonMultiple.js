
function leastCommonMultiple(firstNumber, secondNumber) {
  let greaterNumber;
  if (firstNumber >= secondNumber) {
    greaterNumber = Math.abs(firstNumber);
  }
  else {
    greaterNumber = Math.abs(secondNumber);
  }
  while (!(greaterNumber % firstNumber === 0 && greaterNumber % secondNumber === 0)) {
    greaterNumber += 1;
  }
  const lcm = greaterNumber;

  return lcm;
}

export {
  leastCommonMultiple,
};
