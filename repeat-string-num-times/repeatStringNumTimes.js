
function repeatStringNumTimes(str,rep) {
  if(rep < 0){
    return '';
  }
  var arr = [];
  for(var i =0;i<rep;i++){
    arr[i] = str;
  }
  return arr.join('');
}

export {
  repeatStringNumTimes,
};
