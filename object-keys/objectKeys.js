
function objectKeys(obj) {
  var returnArr = [];
  for(var index in obj){
    returnArr.push(index.toString());
  }

  return returnArr;
}

export {
  objectKeys,
};
