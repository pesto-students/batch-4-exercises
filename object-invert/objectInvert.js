function objectInvert(obj) {
  const invertedObject = {};
  for (const x in obj) {
    if (obj[x]) {
      invertedObject[obj[x]] = x;
    }
  }
  return invertedObject;
}

export {
  objectInvert,
};
