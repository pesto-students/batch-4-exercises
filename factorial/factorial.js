
function factorial(number) {
  var factorial = 1;
  if (number != 0){
    for(var i = number;i>0;i--){
      factorial *= i;
    }
  }
  return factorial;
}

export {
  factorial,
};
