
function largeOfFour(...args) {
  a = args[0].sort((a,b)=>a-b).reverse()[0]
  b = args[0].sort((a,b)=>a-b).reverse()[0]
  c = args[0].sort((a,b)=>a-b).reverse()[0]
  d = args[0].sort((a,b)=>a-b).reverse()[0]
  return [a,b,c,d]
}

export {
  largeOfFour,
};
