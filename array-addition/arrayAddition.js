const isArrayEmpty = array => array.length === 0;
const isNotNumber = value => !(typeof value === 'number');

function arrayAddition(firstArray, secondArray) {
  if (isArrayEmpty(firstArray) || isArrayEmpty(secondArray)) {
    throw new Error('Empty Array');
  }
  if (Array.isArray(firstArray) && Array.isArray(secondArray)) {
    const biggerArray = (firstArray.length > secondArray.length) ? firstArray : secondArray;
    const smallerArray = (firstArray.length <= secondArray.length) ? firstArray : secondArray;
    return biggerArray.map((element, index) => {
      const smallerArrayElement = (smallerArray[index] === undefined) ? 0 : smallerArray[index];
      if (isNotNumber(element) || isNotNumber(smallerArrayElement)) {
        throw new Error('Invalid number');
      }
      const sum = element + smallerArrayElement;
      return sum;
    });
  }
  throw new Error('Not Array');
}

export {
  arrayAddition,
};
