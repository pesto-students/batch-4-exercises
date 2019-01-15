function isIterable(data) {
  return typeof data[Symbol.iterator] === 'function';
}

export { isIterable };
