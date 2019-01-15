const isEmpty = arr => arr.length === 0;
const containsNotNumbers = arr => arr.some(element => typeof element !== 'number');
const compareLengths = (arr1, arr2) => arr1.length - arr2.length;

function arrayAddition(firstArray, secondArray) {
  if (isEmpty(firstArray) || isEmpty(secondArray)) {
    throw new Error('Cannot accept empty array');
  }

  if (containsNotNumbers(firstArray) || containsNotNumbers(secondArray)) {
    throw new Error('Input arrays should contain numbers');
  }

  const [smaller, bigger] = [firstArray, secondArray].sort(compareLengths);

  return bigger.reduce(
    (accumulator, currentElement, currentIndex) => [
      ...accumulator,
      currentElement + (smaller[currentIndex] || 0),
    ],
    [],
  );
}

export { arrayAddition };
