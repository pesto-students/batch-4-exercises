function steamrollArray(...args) {
  function recursiveArrayCheck(arr) {
    var resultant = []
    arr.forEach(element => {
      if (element.constructor === Array) {
        resultant = resultant.concat(recursiveArrayCheck(element))
      } else {
        resultant.push(element)
      }
    });
    return resultant
  }
  var resultant = recursiveArrayCheck(args[0])
  return resultant
}

export {
  steamrollArray,
};