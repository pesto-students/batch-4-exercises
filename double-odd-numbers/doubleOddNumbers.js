function doubleOddNumbers(numArray) {
  return numArray.reduce((acc, el) => {
    if (el % 2 === 1) {
      acc.push(el * 2);
    }
    return acc;
  }, []);
}

export { doubleOddNumbers };
