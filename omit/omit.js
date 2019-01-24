function omit(toDeletePropertyKeys, sourceObject) {
  const sourcePrototypeObject = Object.getPrototypeOf(sourceObject);
  const newObject = {};
  Object.keys(sourceObject).forEach((key) => {
    if (!toDeletePropertyKeys.includes(key)) {
      newObject[key] = sourceObject[key];
    }
  });
  Object.keys(sourcePrototypeObject).forEach((key) => {
    if (!toDeletePropertyKeys.includes(key)) {
      newObject[key] = sourceObject[key];
    }
  });
  return newObject;
}

export { omit };
