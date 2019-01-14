function sumEvenArgs(...numbers) {
  return numbers.reduce((acc, cu, i) => {
    if (i % 2 === 1) {
      return acc + cu;
    }
    return acc;
  }, 0);
}

export { sumEvenArgs };
