
function uniqueRandom(start, end, except = null) {
  let lastResult = except;
  const effectiveRange = end - start;

  return () => {
    const result = Math.ceil(Math.random() * effectiveRange);
    if (result !== lastResult) {
      lastResult = result;
      return result;
    }
    return uniqueRandom(start, end, result);
  };
}

export {
  uniqueRandom,
};
