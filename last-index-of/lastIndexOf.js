
function lastIndexOf(element, elementArray) {
  const reversedArray = [...elementArray].reverse();
  const indexInReversedArray = reversedArray.indexOf(element);
  if (indexInReversedArray < 0) {
    return indexInReversedArray;
  }
  const lastIndexOfElementInOriginalArray = (elementArray.length - 1) - indexInReversedArray;
  return lastIndexOfElementInOriginalArray;
}

export {
  lastIndexOf,
};
