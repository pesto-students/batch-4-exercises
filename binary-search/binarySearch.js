
// eslint-disable-next-line consistent-return
function binarySearch(arr, searchKey) {
  if (typeof searchKey === 'number') {
    const midIndex = Math.round(arr.length / 2) - 1;
    const mediumNumberOfArray = arr[midIndex];
    if (arr.length === 0) {
      return 0;
    }
    if (mediumNumberOfArray === searchKey) {
      return mediumNumberOfArray;
    }
    if (searchKey >= mediumNumberOfArray) {
      binarySearch(arr.slice(midIndex + 1));
    }
  }
}

export {
  binarySearch,
};
