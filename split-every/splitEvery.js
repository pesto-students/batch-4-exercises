const isNotIterable = obj => !(typeof obj === 'string' || Array.isArray(obj));
function splitEvery(splitLength, iterableObj) {
  if (isNotIterable(iterableObj) || splitLength < 1) {
    throw new Error();
  }
  let currentSplitIndex = 0;
  const splittedArray = [];
  while (currentSplitIndex + splitLength < iterableObj.length) {
    splittedArray.push(iterableObj.slice(currentSplitIndex, currentSplitIndex + splitLength));
    currentSplitIndex += splitLength;
  }
  if (currentSplitIndex < iterableObj.length) {
    splittedArray.push(iterableObj.slice(currentSplitIndex));
  }
  return splittedArray;
}

export {
  splitEvery,
};
