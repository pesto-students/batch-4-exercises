
function findElement(arr, cb) {
  const foundArray = arr.filter(element => cb(element));
  const [foundElement] = foundArray;
  return foundElement;
}

export {
  findElement,
};
