
function isIterable(checkIfIterable) {
  return typeof checkIfIterable[Symbol.iterator] === 'function';
}

export {
  isIterable,
};
