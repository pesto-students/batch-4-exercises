function squareNumbersArray(...args) {
  for (let i = 0; i < args.length; i += 1) {
    if (typeof args[i] !== 'number') {
      throw new Error('My custom error');
    }
  }
  return args;
}

export { squareNumbersArray };
