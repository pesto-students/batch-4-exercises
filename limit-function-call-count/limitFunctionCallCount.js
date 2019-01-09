
function limitFunctionCallCount(fun, x) {
  let limit = x;
  return (a, b, c) => {
    limit -= 1;
    if (limit < 0) {
      return null;
    }
    return fun(a, b, c);
  };
}

export {
  limitFunctionCallCount,
};
