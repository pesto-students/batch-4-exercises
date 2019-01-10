function mapObject(obj, callback) {
  const newObj = {};
  for (const x in obj) {
    if (obj[x]) {
      newObj[x] = callback(obj[x]);
    }
  }
  return newObj;
}

export {
  mapObject,
};
