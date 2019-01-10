function curry(fn) {
  const fnLen = fn.length;
  let allParams = [];
  return function innerFunction(...params) {
    allParams = [...allParams, ...params];
    if (allParams.length >= fnLen) {
      return fn(...allParams);
    }
    return innerFunction;
  };
}

export { curry };
