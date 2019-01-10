function mapObject(obj, fn) {
  const newObj = {};
  Object.keys(obj).forEach((key) => {
    newObj[key] = fn(obj[key]);
  });
  return newObj;
}

export { mapObject };
