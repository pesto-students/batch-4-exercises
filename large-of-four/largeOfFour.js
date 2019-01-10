
function largeOfFour(...args) {
  var a = args[0][0].sort((a,b)=>a-b).reverse()[0]
  var b = args[0][1].sort((a,b)=>a-b).reverse()[0]
  var c = args[0][2].sort((a,b)=>a-b).reverse()[0]
  var d = args[0][3].sort((a,b)=>a-b).reverse()[0]
  return [a,b,c,d]
}

export {
  largeOfFour,
};
