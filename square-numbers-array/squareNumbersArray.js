function squareNumbersArray(initial_func) {
  try {
    initial_func()
  } catch (error) {
    throw ('My custom error')
  }

}

export {
  squareNumbersArray,
};
