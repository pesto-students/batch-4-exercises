const notInstanceOfArray = arr => !(arr instanceof Array);
const hasSameType = (thing1, thing2) => (typeof thing1 === typeof thing2);
const NotAddCompatable = (arrayOne, arrayTwo) => notInstanceOfArray(arrayOne)
  || notInstanceOfArray(arrayTwo) || arrayOne.length === 0 || arrayTwo.length === 0;
function arrayAddition(arrayOne, arrayTwo) {
  let maxLengthArray = arrayOne;
  let lessLengthArray = arrayTwo;
  if (NotAddCompatable(arrayOne, arrayTwo)) {
    throw new Error();
  }
  if (arrayOne.length < arrayTwo.length) {
    maxLengthArray = arrayTwo;
    lessLengthArray = arrayOne;
  }
  return maxLengthArray.map((value, index) => {
    if (index < lessLengthArray.length) {
      if (!hasSameType(value, lessLengthArray[index])) {
        throw new Error();
      }
      return value + lessLengthArray[index];
    }
    return value;
  });
}

export {
  arrayAddition,
};
