const isPresentInArray = (number, array) => {
  const found = array.find(value => value === number);
  if (found) return true;
  return false;
};

function searchSortedMatrix(obj) {
  const { search, matrix } = obj;
  const rowLastElements = matrix.map(row => row[row.length - 1]);
  for (let i = 0; i < rowLastElements.length; i += 1) {
    if (search <= rowLastElements[i]) {
      return isPresentInArray(search, matrix[i]);
    }
  }
  return false;
}

export {
  searchSortedMatrix,
};
