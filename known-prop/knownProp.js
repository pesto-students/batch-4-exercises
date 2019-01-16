function knownProp(targetObject) {
  return new Proxy(targetObject, {
    get(target, key) {
      if (key in target) {
        return target[key];
      }
      throw new TypeError('Unknown property');
    },
  });
}

export { knownProp };
