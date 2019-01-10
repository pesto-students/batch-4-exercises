function getIndexToIns(...args) {
  const array = args[0].sort((a, b) => a - b)
  const toBeInserted = args[1]
  for (let index = 0; index < array.length; index++) {
    if (array[index] >= toBeInserted) {
      return index
    }
  }
  return array.length
}

export {
  getIndexToIns,
};