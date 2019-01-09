const sumAll = (inputs) => {
  const inps = inputs.sort((a, b) => a - b);
  const [begin, end] = inps;
  let sum = 0;
  // eslint-disable-next-line
  for (let i = begin; i <= end; i++) {
    sum += i;
  }
  return sum;
};

export { sumAll };
