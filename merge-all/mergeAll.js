
function mergeAll(objs) {
  return objs.reduce((acc, currentObj) => ({ ...acc, ...currentObj }), {});
}

export {
  mergeAll,
};
