function binarySearch(array, elementToBeSearched, comparator) {
  const determineGreater = (element1, element2, objectComparator) => {
    if (objectComparator !== undefined) {
      return objectComparator(element1, element2);
    }
    if (element1 === element2) {
      return 0;
    }
    return element1 > element2 ? 1 : -1;
  };
  let start = 0;
  let end = array.length - 1;
  while (start <= end) {
    // eslint-disable-next-line prefer-const
    let mid = Math.floor((start + end) / 2);
    if ((determineGreater(array[mid], elementToBeSearched, comparator) === 0)) {
      return mid;
    }
    if (determineGreater(array[mid], elementToBeSearched, comparator) === -1) {
      start = mid + 1;
    }
    if (determineGreater(array[mid], elementToBeSearched, comparator) === 1) {
      end = mid - 1;
    }
  }
  return -1;
}

export { binarySearch };
