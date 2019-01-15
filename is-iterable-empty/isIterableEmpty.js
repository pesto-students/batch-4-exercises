
function isIterableEmpty(iterable) {
  return iterable[Symbol.iterator]().next().value == undefined;
}

export {
  isIterableEmpty,
};
