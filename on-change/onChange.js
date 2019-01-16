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
});

function onChange(fixture, callback) {
  return new Proxy({ ...fixture }, getProxyHandler(callback));
}

export { onChange };
