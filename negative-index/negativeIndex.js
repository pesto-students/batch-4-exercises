
const sanitizeArrayIndex = (index, lengthOfArray) => {
  if (index < 0) {
    return lengthOfArray + parseInt(index, 10);
  }

  return index;
};
function negativeIndex(arrayToProxy) {
  if (!Array.isArray(arrayToProxy)) {
    throw new TypeError('Only arrays are supported');
  }

  const proxyForArray = new Proxy(arrayToProxy, {
    get(targetArray, index) {
      const sanitizedIndex = sanitizeArrayIndex(index, targetArray.length);
      return targetArray[sanitizedIndex];
    },
    set(targetArray, index, value) {
      const sanitizedIndex = sanitizeArrayIndex(index, targetArray.length);
      Reflect.set(targetArray, sanitizedIndex, value);

      return value;
    },
  });

  return proxyForArray;
}

export {
  negativeIndex,
};
