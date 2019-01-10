function objectInvert(obj) {
  const newObj = {};
  Object.keys(obj).forEach((key) => {
    const val = obj[key];
    newObj[val] = key;
  });
  return newObj;
}

export { objectInvert };
