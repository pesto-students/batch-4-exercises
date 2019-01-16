
function setDefaultProperty(object, defaultValue) {
  const proxyObject = new Proxy(object, {
    get(target, key) {
      if (key in target) {
        return target[key];
      }
      return defaultValue;
    },
    set(target, key, value) {
      Reflect.set(target, key, value);
    },
  });
  return proxyObject;
}

export {
  setDefaultProperty,
};
