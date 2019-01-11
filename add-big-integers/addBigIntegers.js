function addTwoBigInts(arg1, arg2) {
  let finalSum = '';
  let num1;
  let num2;

  // longer of two arguments become num1.
  // since inputs are in form of string, we can compare their lengths
  if (arg2.length > arg1.length) {
    num2 = arg1;
    num1 = arg2;
  } else {
    num2 = arg2;
    num1 = arg1;
  }

  // This loop adds each digits and carried over digit, if any, starting from right to
  // then appends last digit of the result to finalSum
  // carries over rest of the digits to be added on the digits of its right
  let carry = 0;
  for (let i = 1; i <= num1.length; i += 1) {
    const digitOfNum1 = parseInt(num1.charAt(num1.length - i), 10);
    const digitOfNum2 = parseInt(num2.charAt(num2.length - i), 10) || 0;
    const sumOfDigits = (carry + digitOfNum1 + digitOfNum2).toString();
    const sumWithoutCarry = sumOfDigits.charAt(sumOfDigits.length - 1);
    carry = parseInt(sumOfDigits.substr(0, sumOfDigits.length - 1), 10) || 0;
    finalSum = i === num1.length ? sumOfDigits + finalSum : sumWithoutCarry + finalSum;
  }

  return finalSum;
}

function addBigIntegers(args) {
  const numArrayToAdd = args.split('\n').slice(1);
  return numArrayToAdd.reduce(addTwoBigInts, '0');
}

export { addBigIntegers };
