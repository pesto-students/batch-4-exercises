
function lastIndexOf(elementToBeSearched, array) {
  const reducer = (lastIndex, element, index) => {
    if (elementToBeSearched === element) {
      return index;
    }
    return lastIndex;
  };

  return array.reduce(reducer, -1);
}

export {
  lastIndexOf,
};
