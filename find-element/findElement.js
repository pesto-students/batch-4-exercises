
function findElement(arr, isEven) {
  return arr.find(element => isEven(element));
}

export {
  findElement,
};
