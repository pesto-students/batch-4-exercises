
function counter(...args) {
  var a = 0
  return function(){
    a = a+1
    return a
  }
}

export {
  counter,
};
