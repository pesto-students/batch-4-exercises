
function getIndexToIns(arr,val) {
  arr.push(val);
  var newArr = arr;
  newArr.sort((a,b) => a-b);

  return newArr.indexOf(val);
}

export {
  getIndexToIns,
};
