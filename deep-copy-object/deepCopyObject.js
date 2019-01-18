function deepCopyObject(object) {
  if (typeof object === 'object' && object !== null) {
    return Object.keys(object).reduce(
      (accumulator, key) => ({ ...accumulator, [key]: deepCopyObject(object[key]) }),
      {},
    );
  }
  return object;
}

export { deepCopyObject };
