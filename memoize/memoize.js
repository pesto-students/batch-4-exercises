function memoize(callback) {
  const memo = {};

  return (...args) => {
    if (args in memo) {
      return memo[args];
    }
    memo[args] = callback(...args);
    return memo[args];
  };
}

export { memoize };
