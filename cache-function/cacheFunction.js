
function cacheFunction(...args) {
  if (args[0] === undefined) {
    return () => {};
  }
  return args[0];
}

export {
  cacheFunction,
};
