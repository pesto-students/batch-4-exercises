function findElement(ary, fn) {
  return ary.find(item => fn(item));
}

export { findElement };
