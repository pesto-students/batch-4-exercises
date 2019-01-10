
function getIndexToIns(arr, value) {
  arr.sort((a, b) => a - b);
  let indexIn;
  arr.find((element, index) => {
    if (value < element) {
      indexIn = index;
      return true;
    }
    return false;
  });
  return indexIn;
}

export {
  getIndexToIns,
};
