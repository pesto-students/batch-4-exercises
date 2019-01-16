function proxyIterable(...allValues) {
  return new Proxy(allValues, {
    get(obj, key) {
      const accessedValue = Reflect.get(obj, key);
      obj.map(accessedValue);
      return accessedValue;
    },
  });
}

export { proxyIterable };
