function squareNumbersArray(...array) {
  if (!array.every(element => typeof element === 'number')) {
    throw new Error('My custom error');
  }
}

export { squareNumbersArray };
