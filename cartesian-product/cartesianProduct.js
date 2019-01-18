
function cartesianProduct(firstArray, secondArray) {
  if (firstArray === null || secondArray === null) {
    return null;
  }
  if (firstArray.length === 0 || secondArray.length === 0) {
    return null;
  }
  return firstArray.reduce((acc, curVal) => {
    const row = secondArray.map(value => [curVal, value]);
    return [...acc, ...row];
  }, []);
}

export {
  cartesianProduct,
};
