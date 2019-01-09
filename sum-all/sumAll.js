
function sumAll(arr) {
  let sum = 0;
  let i = (arr[0] < arr[1]) ? arr[0] : arr[1];
  const j = (arr[0] > arr[1]) ? arr[0] : arr[1];
  while (i <= j) {
    sum += i;
    i += 1;
  }
  return sum;
}

export {
  sumAll,
};
