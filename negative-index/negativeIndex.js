
function negativeIndex(targetObj) {
  if (!(targetObj instanceof Array)) {
    throw new TypeError(/Only arrays are supported/);
  }
  const proxyHandler = {
    get(target, key) {
      if (key < 0) {
        const rightIndex = target.length + parseInt(key, 10);
        return Reflect.get(target, rightIndex);
      }
      return Reflect.get(target, key);
    },
    set(target, key, value) {
      console.log('key', key);
      if (key < 0) {
        console.log('key', key);
        const rightIndex = target.length + parseInt(key, 10);
        Reflect.set(target, rightIndex, value);
        return true;
      }
      console.log('ehat', key);
      Reflect.set(target, key, value);
      return true;
    },
  };
  const proxyObj = new Proxy(targetObj, proxyHandler);
  return proxyObj;
}

export {
  negativeIndex,
};
