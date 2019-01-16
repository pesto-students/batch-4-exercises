
function searchSortedMatrix(matrixAndSearchValueObject) {
  const { search, matrix } = matrixAndSearchValueObject;
  // eslint-disable-next-line guard-for-in
  for (const row of matrix) {
    if (search < row[0]) {
      return false;
      // eslint-disable-next-line no-else-return
    } else if (search > row[row.length - 1]) {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (row.indexOf(search)) {
      return true;
    }
  }
  return false;
}

export {
  searchSortedMatrix,
};
