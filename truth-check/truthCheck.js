
function truthCheck(obj,key) {
  var keys = Object.keys(obj);

  for(var index in obj){
    var item = obj[index];
    if(!item[key]){
      return false;
    }
  }

  return true;
}

export {
  truthCheck,
};
