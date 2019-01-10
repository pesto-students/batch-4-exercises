
function rotatedString(...args) {
  const input = args[0].split("")
  const rotated = args[1].split("")
  const roof = input.length
  const rotDiff = rotated.indexOf(input[0])

  function addition(a, b) {
    if (a + b < roof) {
      return (a + b)
    } else {
      return ((a + b) % roof)
    }
  }
  
  if (rotDiff <=0 ){
    return false
  }else{
    input.forEach((element,index) => {
      var new_index = addition(index,rotDiff)
      if (rotated[new_index] !== element){
        return false
      }
    });
  }
  return true
}

export {
  rotatedString,
};
