function primalityTest(number) {
  if (number <= 1) {
    return 0;
  }
  if (number === 2) {
    return 1;
  }
  const roundedSquareRoot = Math.round(Math.sqrt(number));
  for (let x = 2; x <= roundedSquareRoot; x += 1) {
    if (number % x === 0) {
      return 0;
    }
  }
  return 1;
}

export { primalityTest };
