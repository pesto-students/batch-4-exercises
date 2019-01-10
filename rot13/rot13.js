function rot13(...args) {
  function addition(a, b) {
    if (a + b < 26) {
      return (a + b)
    } else {
      return ((a + b) % 26)
    }
  }
  var inputArr = args[0].split("")
  const mapArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var result = []
  inputArr.forEach((element) => {
    if (mapArr.indexOf(element) === -1) {
      result.push(element)
    } else {
      result.push(mapArr[addition(mapArr.indexOf(element),13)])
    }
  });
  return result.join("")
}

export {
  rot13,
};