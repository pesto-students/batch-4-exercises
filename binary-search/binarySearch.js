const compare = (elementOne, elementTwo, comparator) => {
  if (comparator) {
    return comparator(elementOne, elementTwo);
  }
  return elementOne - elementTwo;
};

function binarySearchNumbers(sortedData, start, end, target, comparator) {
  if (end - start < 0) {
    return -1;
  }
  const mid = Math.floor((start + end) / 2);
  const elementInMiddle = sortedData[mid];

  const comparisonResult = compare(elementInMiddle, target, comparator);

  if (comparisonResult === 0) {
    return mid;
  }

  if (comparisonResult > 0) {
    return binarySearchNumbers(sortedData, start, mid - 1, target, comparator);
  }

  if (comparisonResult < 0) {
    return binarySearchNumbers(sortedData, mid + 1, end, target, comparator);
  }

  return -1;
}

function binarySearch(sortedData, target, comparator) {
  // eslint-disable-next-line prefer-destructuring
  const length = sortedData.length;

  const start = 0;
  const end = length - 1;
  return binarySearchNumbers(sortedData, start, end, target, comparator);
}

export { binarySearch };
