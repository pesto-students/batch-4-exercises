
function updateObject(index, elementToBeInserted, array) {
  if (index > (array.length - 1)) {
    return array;
  }
  const indexCpy = index < 0 ? array.length + index : index;
  const arrayCpy = [...array];
  arrayCpy[indexCpy] = elementToBeInserted;
  return arrayCpy;
}

export {
  updateObject,
};
