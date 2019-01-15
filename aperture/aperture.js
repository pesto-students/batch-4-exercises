
function aperture(tupleLength, arrToSplit) {
  const tupledArray = [];
  if (tupleLength > arrToSplit.length) {
    return tupledArray;
  }
  for (const [index] of arrToSplit.entries()) {
    if (index + tupleLength > arrToSplit.length) {
      break;
    }
    tupledArray.push(arrToSplit.slice(index, index + tupleLength));
  }
  return tupledArray;
}

export {
  aperture,
};
