
function knownProp(originalObject) {
  const proxyForOriginalObject = new Proxy(originalObject, {
    get(target, key) {
      if (key in target) {
        return Reflect.get(target, key);
      }
      throw new TypeError(`Undefined property: ${key}`);
    },
  });

  return proxyForOriginalObject;
}

export {
  knownProp,
};
