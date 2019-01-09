function getIndexToIns(numAry, num) {
  const index = numAry.sort((a, b) => a - b).findIndex(item => item >= num);
  return index === -1 ? numAry.length : index;
}

export { getIndexToIns };
