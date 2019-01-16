
function onChange(fixture, changeCounterCallback) {
  const proxyHandler = {
    get(target, key) {
      if (typeof target[key] === 'object' && target[key] !== null) {
        return new Proxy(target[key], proxyHandler);
      }
      return Reflect.get(target, key);
    },
    set(target, key, value) {
      changeCounterCallback();
      Reflect.set(target, key, value);
      return true;
    },
    defineProperty(target, key, value) {
      changeCounterCallback();
      Object.defineProperty(target, key, value);
      return true;
    },
    deleteProperty(target, key) {
      changeCounterCallback();
      Reflect.deleteProperty(target, key);
      return true;
    },
  };
  const proxyObj = new Proxy(fixture, proxyHandler);
  return proxyObj;
}

export {
  onChange,
};
