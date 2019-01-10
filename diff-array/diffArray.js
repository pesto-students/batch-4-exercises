function diffArray(...args) {
  
  var array1 = args[0]
  var array2 = args[1]
  var result1 = array1.filter(el => array2.indexOf(el) == -1)
  var result2 = array2.filter(el => array1.indexOf(el) == -1)
  return result1.concat(result2)

}

export {
  diffArray,
};