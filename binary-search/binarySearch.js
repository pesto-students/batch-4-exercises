
function binarySearch(array, elementToBeSearched) {
  let start = 0;
  let end = array.length - 1;
  let mid = (start + end) / 2;
  while (start < end) {
    if (array[mid] === elementToBeSearched) {
      return mid;
    }
    if (elementToBeSearched > array[mid]) {
      start = mid;
    }
    if (elementToBeSearched < array[mid]) {
      end = mid;
    }
    mid = (start + end) / 2;
  }
  return -1;
}

export {
  binarySearch,
};
