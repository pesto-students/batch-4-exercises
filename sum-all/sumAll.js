
function sumAll(...args) {
  var sum = 0
  if (args[0][0] < args[0][1]){
    for (let index = args[0][0]; index <= args[0][1]; index++) {
      sum = sum+index
      
    }
  }
  else{
    for (let index = args[0][1]; index <= args[0][0]; index++) {
      sum = sum+index
      
    }
  }
  return sum
}

export {
  sumAll,
};
