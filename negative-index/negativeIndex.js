
function negativeIndex(inputObject) {
  const proxyObject = new Proxy(inputObject, {
    getProperIndex(index) {
      if (index < 0) {
        return inputObject.length + Number(index);
      }
      return Number(index);
    },
    get(target, key) {
      return inputObject[this.getProperIndex(key)];
    },
    set(target, key) {
      Reflect.set(inputObject, this.getProperIndex(key));
    },
  });
  return proxyObject;
}

export {
  negativeIndex,
};
