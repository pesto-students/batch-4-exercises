
function getIndexToIns(arr, num) {
  for (let i = 0; i < arr.length - 1; i += 1) {
    if (num >= arr[i] && num <= arr[i + 1]) return i + 1;
  }
  return null;
}

export {
  getIndexToIns,
};
