
function objectPairs(obj) {
  const objectPairArray = [];
  for (const x in obj) {
    if (obj[x]) {
      objectPairArray.push([x, obj[x]]);
    }
  }
  return objectPairArray;
}

export {
  objectPairs,
};
