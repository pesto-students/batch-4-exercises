
function uniq(arr) {
  const uniqElementArray = [];
  arr.map((element) => {
    const isInUniqArray = uniqElementArray.filter(value => Object.is(value, element));
    if (isInUniqArray.length === 0) {
      uniqElementArray.push(element);
    }
    return 0;
  });
  return uniqElementArray;
}

export {
  uniq,
};
