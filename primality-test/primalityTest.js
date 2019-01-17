function primalityTest(number) {
  if ((number === 1) || (number === -1)) {
    return false;
  }
  if (number === 0) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  const sqrt = Math.ceil(Math.sqrt(number));
  let start = 2;
  while (start <= sqrt) {
    if (number % start === 0) {
      return false;
    }
    start += 1;
  }
  return true;
}

export {
  primalityTest,
};
