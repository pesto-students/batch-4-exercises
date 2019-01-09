
function diffArray(arr1, arr2) {
  var diff = [];
  arr1.forEach((el) => {
    if(!arr2.includes(el)){
      diff.push(el);
    }
  });

  arr2.forEach((el) => {
    if(!arr1.includes(el)){
      diff.push(el);
    }
  });
  return diff;
}

export {
  diffArray,
};
