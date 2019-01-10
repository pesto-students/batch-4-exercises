
function objectValues(obj) {
  const valueArray = [];
  for (const x in obj) {
    if (obj[x]) {
      valueArray.push(obj[x]);
    } else if (obj[x] === null) {
      valueArray.push(obj[x]);
    }
  }
  return valueArray;
}

export {
  objectValues,
};
