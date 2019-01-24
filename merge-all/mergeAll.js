
function mergeAll(arrayOfObjects) {
  return Object.assign({}, ...arrayOfObjects);
}

export {
  mergeAll,
};
