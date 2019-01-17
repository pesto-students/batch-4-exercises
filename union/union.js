
function union(array1, array2) {
  const unionedArray = [...array1];
  array2.map((element) => {
    const isInUnionArray = unionedArray.find(value => Object.is(value, element));
    if (isInUnionArray === undefined) {
      unionedArray.push(element);
    }
    return 0;
  });
  return unionedArray;
}

export {
  union,
};
