
function addBigIntegers(bigIntegerString) {
  const afterRemoveFirstNumber = bigIntegerString.split('\n');
  afterRemoveFirstNumber.shift();
  const bigIntegerArray = afterRemoveFirstNumber.map(integerString => parseInt(integerString, 10));
  return bigIntegerArray.reduce((sum, bigInteger) => sum + bigInteger, 0).toFixed();
}

export {
  addBigIntegers,
};
