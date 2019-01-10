function dropElements(ary, fn) {
  return ary.filter(item => fn(item));
}

export { dropElements };
