function sundanFn({ n, x, y }) {
  if (n === 0) {
    return x + y;
  }
  if (y === 0) {
    return x;
  }

  const newN = n - 1;
  const newX = sundanFn({
    n,
    x,
    y: y - 1,
  });
  const newY = newX + y;

  return sundanFn({
    n: newN,
    x: newX,
    y: newY,
  });
}

export { sundanFn };
