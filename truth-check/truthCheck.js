
function truthCheck(arr, checkPropertyValue) {
  for (const x of arr) {
    if (x[checkPropertyValue] || x[checkPropertyValue] === false) {
      return false;
    }
  }
  return true;
}

export {
  truthCheck,
};
