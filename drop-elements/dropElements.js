
function dropElements(arr, cb) {
  return arr.filter(element => cb(element));
}

export {
  dropElements,
};
