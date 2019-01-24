const mergeTwoObjects = (objectOne, objectTwo) => ({ ...objectOne, ...objectTwo });

function mergeAll(objectArray) {
  return objectArray.reduce(mergeTwoObjects);
}

export { mergeAll };
