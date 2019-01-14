function joinArrays(...arrays) {
  let resultant = [];
  arrays.forEach((element) => {
    resultant = resultant.concat(element);
  });
  return resultant;
}

export {
  joinArrays,
};
