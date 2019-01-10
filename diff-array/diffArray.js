
function diffArray(arr1, arr2) {
  const newArray = [];
  arr1.map((element) => {
    if (arr2.indexOf(element) < 0) {
      newArray.push(element);
    }
    return 0;
  });
  arr2.map((element) => {
    if (arr1.indexOf(element) < 0) {
      newArray.push(element);
    }
    return 0;
  });
  return newArray;
}

export {
  diffArray,
};
