const not = val => !val;
const isNumber = val => not(Number.isNaN(val));
const isNegativeNumber = val => isNumber(val) && val < 0;
function negativeIndex(argObject) {
  if (not(Array.isArray(argObject))) {
    throw new TypeError('Only arrays are supported');
  }
  return new Proxy(argObject, {
    get(target, key) {
      if (isNegativeNumber(key)) {
        return target[target.length + (Number(key) % target.length)];
      }
      return target[key];
    },
    set(target, key, value) {
      /* eslint-disable */
      if (isNegativeNumber(key)) {
        target[target.length + (Number(key) % target.length)] = value;
      }
      target[key] = value;
      return true;
    }
  });
}

export { negativeIndex };
