function bind(fn, thisObj, ...args) {
  return fn.bind(thisObj, ...args);
}

export { bind };
