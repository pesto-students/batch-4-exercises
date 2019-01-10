
function objectDefaults(obj1, obj2) {
  const newFilledObj = JSON.parse(JSON.stringify(obj1));
  for (const x in obj2) {
    if (!newFilledObj[x]) {
      newFilledObj[x] = obj2[x];
    }
  }
  return newFilledObj;
}

export {
  objectDefaults,
};
