function isIterableEmpty(iterable) {
  return iterable[Symbol.iterator]().next().done;
}

export { isIterableEmpty };
