
function omit(omitKeysArray, object) {
  const filteredObj = {};
  for (const key in object) {
    if (omitKeysArray.indexOf(key) < 0) {
      filteredObj[key] = object[key];
    }
  }
  return filteredObj;
}

export {
  omit,
};
