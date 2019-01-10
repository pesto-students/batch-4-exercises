
function objectPairs(obj) {
  var returnArr = [];
  for(var index in obj){
    returnArr.push([index.toString(),obj[index]]);
  }

  return returnArr;
}

export {
  objectPairs,
};
