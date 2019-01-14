
function tripleAndFilter(numersArray) {
  const tripledNumbers = numersArray.map(element => element * 3);
  const divisibleByFive = tripledNumbers.filter(element => element %5 === 0 )
  return divisibleByFive
}

export {
  tripleAndFilter,
};
