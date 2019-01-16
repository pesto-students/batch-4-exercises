function knownProp(targetObj) {
  const proxyHandler = {
    get(target, key) {
      if (!Object.prototype.hasOwnProperty.call(target, key)) {
        throw new TypeError(/Unknown property/);
      }
      return Reflect.get(target, key);
    },
  };
  const proxyObj = new Proxy(targetObj, proxyHandler);
  return proxyObj;
}

export { knownProp };
