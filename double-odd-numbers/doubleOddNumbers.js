
function doubleOddNumbers(numbersArray) {
  const oddNumbers = numbersArray.filter(element => element % 2 !== 0 )
  const numbersDoubled = oddNumbers.map(element => element * 2);
  return numbersDoubled;
}

export {
  doubleOddNumbers,
};
