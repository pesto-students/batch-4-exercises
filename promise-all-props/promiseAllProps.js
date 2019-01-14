const reduceToKeyValue = (accumulator, value) => ({ ...accumulator, [value]: value });

function promiseAllProps(keyValues) {
  const promises = Object.values(keyValues);
  const resolved = Promise.all(promises);

  return resolved.then(resultArray => resultArray.reduce(reduceToKeyValue, {}));
}

export { promiseAllProps };
