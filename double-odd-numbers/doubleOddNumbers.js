const isOdd = value => value % 2;
function doubleOddNumbers(arr) {
  const filteredOddArray = arr.filter(element => isOdd(element));
  const doubledOddNumberArray = filteredOddArray.map(number => 2 * number);
  return doubledOddNumberArray;
}

export {
  doubleOddNumbers,
};
