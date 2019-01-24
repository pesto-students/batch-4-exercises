function nthArg(n) {
  function getNth(...args) {
    return args[n];
  }
  return getNth;
}

export { nthArg };
