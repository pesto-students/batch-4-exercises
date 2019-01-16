
function setDefaultProperty(originalObject, defaultValue) {
  const proxyForOriginalObject = new Proxy(originalObject, {
    get(target, key) {
      if (key in target) {
        return Reflect.get(target, key);
      }
      return defaultValue;
    },
  });

  return proxyForOriginalObject;
}

export {
  setDefaultProperty,
};
