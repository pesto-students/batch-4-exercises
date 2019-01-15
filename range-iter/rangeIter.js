
function *rangeIter(start,end) {
  if (typeof(start) !== 'number' ) {
    throw TypeError('undefined is not a number')
  }
  while (start <= end) {
    yield start;
    start+=1;
  }
}

export {
  rangeIter,
};
