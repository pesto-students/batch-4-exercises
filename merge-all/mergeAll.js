function mergeAll(objectArray) {
  return objectArray.reduce((acc, obj) => {
    Object.keys(obj).forEach((propertyKey) => {
      acc[propertyKey] = obj[propertyKey];
    });
    return acc;
  }, {});
}

export { mergeAll };
