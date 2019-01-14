const isOdd = number => !(number % 2 === 0);
function doubleOddNumbers(numbers) {
  return numbers.filter(value => isOdd(value)).map(value => value * 2);
}

export {
  doubleOddNumbers,
};
