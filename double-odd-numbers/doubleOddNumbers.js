const isOdd = val => val % 2 === 1;
function doubleOddNumbers(ary) {
  return ary.filter(isOdd).map(val => val * 2);
}

export { doubleOddNumbers };
