function truthCheck(ary, val) {
  return ary.every(item => !!item[val]);
}

export { truthCheck };
