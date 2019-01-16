
function knownProp(obj) {
  const handler = {
    get(target, property) {
      if (property in target) {
        return target[property];
      }
      throw new TypeError('Unknown property');
    },
  };
  return new Proxy(obj, handler);
}

export {
  knownProp,
};
