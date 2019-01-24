
function mergeAll(objectsArray) {
  return objectsArray.reduce((accumulator, object) => ({ ...accumulator, ...object }), {});
}

export {
  mergeAll,
};
