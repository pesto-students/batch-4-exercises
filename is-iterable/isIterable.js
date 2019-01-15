function isIterable(obj) {
  return !null && typeof obj[Symbol.iterator] === 'function';
}

export { isIterable };
