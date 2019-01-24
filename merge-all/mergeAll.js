
function mergeAll(objectsToMerge) {
  return objectsToMerge.reduce((acc, object) => Object.assign(acc, object));
}

export {
  mergeAll,
};
