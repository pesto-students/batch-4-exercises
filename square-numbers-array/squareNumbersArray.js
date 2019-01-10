
function squareNumbersArray(...args) {
  args.forEach((element) => {
    if (typeof element === 'string') {
      throw new Error('My custom error');
    }
  });
  return true;
}

export {
  squareNumbersArray,
};
