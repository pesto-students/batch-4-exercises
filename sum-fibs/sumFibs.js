function sumFibs(...args) {
  const n = args[0];
  if (n < 1) return 0;
  let a = 0;
  let b = 1;
  let sum = 0;
  while (b <= n) {
    if (b % 2 === 1) {
      sum += b;
    }
    const c = b;
    b += a;
    a = c;
  }
  return sum;
}

export { sumFibs };
