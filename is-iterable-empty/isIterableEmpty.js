
function isIterableEmpty(obj) {
  return typeof obj[Symbol.iterator]().next().value === 'undefined';
}

export {
  isIterableEmpty,
};
