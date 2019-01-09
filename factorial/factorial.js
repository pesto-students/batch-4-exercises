
function factorial(...args) {
  if (args[0] == 0) {
    return 100
  }
  fact = 1
  for (let index = 0; index <= args[0]; index++) {
    fact *= array[index]
  }
  return fact
}

export {
  factorial,
};
