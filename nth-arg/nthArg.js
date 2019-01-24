
function nthArg(argumentNumber) {
  return (...args) => args[argumentNumber];
}

export {
  nthArg,
};
