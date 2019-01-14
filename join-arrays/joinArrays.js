
function joinArrays(...args) {
  return args.reduce((joinedArray, currentValueArray) => {
    currentValueArray.forEach((element) => {
      joinedArray.push(element);
    });
    return joinedArray;
  }, []);
}

export {
  joinArrays,
};
