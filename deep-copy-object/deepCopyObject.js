const isAnObject = object => typeof object === 'object' && object !== null;

function deepCopyObject(object) {
  if (isAnObject(object)) {
    return Object.keys(object).reduce(
      (accumulator, key) => ({ ...accumulator, [key]: deepCopyObject(object[key]) }),
      {},
    );
  }
  return object;
}

export { deepCopyObject };
