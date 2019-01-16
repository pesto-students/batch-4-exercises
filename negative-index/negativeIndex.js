
function negativeIndex(inputObject) {
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
  });
  return proxyObject;
}

export {
  negativeIndex,
};
