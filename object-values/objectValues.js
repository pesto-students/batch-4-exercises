
function objectValues(obj) {
  var returnArr = [];
  for(var index in obj){
    if(obj[index]){
      returnArr.push(obj[index].toString());
    } else {
      returnArr.push(obj[index]);
    }
  }

  return returnArr;
}

export {
  objectValues,
};
