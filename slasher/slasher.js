
function slasher(arr, slashCount) {
  for (let x = 0; x < slashCount; x += 1) {
    arr.shift();
    if (arr.length === 0) {
      break;
    }
  }
  return arr;
}

export {
  slasher,
};
