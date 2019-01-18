/* eslint-disable quotes */
/* eslint-disable comma-dangle */
function binarySearchInArray(arr, searchKey, low, high) {
  const midIndex = Math.round((low + high) / 2);
  const mediumNumberOfArray = arr[midIndex];
  if (low > high) {
    return -1;
  }
  if (mediumNumberOfArray === searchKey) {
    return midIndex;
  }
  if (searchKey > mediumNumberOfArray) {
    return binarySearchInArray(arr, searchKey, midIndex + 1, high);
  }
  return binarySearchInArray(arr, searchKey, low, midIndex - 1);
}

function binarySearchInObjectList(arr, searchKey, low, high, comparator) {
  const midIndex = Math.round((low + high) / 2);
  const mediumNumberOfArray = arr[midIndex];
  if (low > high) {
    return -1;
  }
  if (!comparator(searchKey, mediumNumberOfArray)) {
    return midIndex;
  }
  if (comparator(searchKey, mediumNumberOfArray) === 1) {
    return binarySearchInObjectList(
      arr,
      searchKey,
      midIndex + 1,
      high,
      comparator
    );
  }
  return binarySearchInObjectList(
    arr,
    searchKey,
    low,
    midIndex - 1,
    comparator
  );
}

function binarySearch(arr, searchKey, comparator) {
  if (typeof searchKey === "number") {
    return binarySearchInArray(arr, searchKey, 0, arr.length - 1);
  }
  return binarySearchInObjectList(
    arr,
    searchKey,
    0,
    arr.length - 1,
    comparator
  );
}

export { binarySearch };
