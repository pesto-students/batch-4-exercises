
function negativeIndex(inputObject) {
  if (!Array.isArray(inputObject)) {
    throw new TypeError('Only arrays are supported');
  }
  const proxyObject = new Proxy(inputObject, {
    getProperIndex(index) {
      if (index < 0) {
        return inputObject.length + Number(index);
      }
      return index;
    },
    get(target, key) {
      return target[this.getProperIndex(key)];
    },
    set(target, key, value) {
      Reflect.set(target, this.getProperIndex(key), value);
    },
  });
  return proxyObject;
}

export {
  negativeIndex,
};
