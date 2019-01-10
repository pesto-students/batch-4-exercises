function mapObject(obj, callback) {
  const newObj = {};
  for (const key in obj) {
    if ({}.hasOwnProperty.call(obj, key)) {
      newObj[key] = callback(obj[key]);
    }
  }

  return newObj;
}

export { mapObject };
