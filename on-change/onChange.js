const isObject = value => typeof value === 'object';

const getProxyHandler = callback => ({
  set(obj, key, value) {
    callback();
    return Reflect.set(obj, key, value);
  },

  defineProperty(obj, key, value) {
    callback();
    return Reflect.defineProperty(obj, key, value);
  },

  deleteProperty(obj, key) {
    callback();
    return Reflect.deleteProperty(obj, key);
  },

  get(obj, key) {
    const accessedValue = Reflect.get(obj, key);
    if (isObject(accessedValue)) {
      return new Proxy(Reflect.get(obj, key), getProxyHandler(callback));
    }
    return accessedValue;
  },
});

function onChange(target, callback) {
  return new Proxy(target, getProxyHandler(callback));
}

export { onChange };
