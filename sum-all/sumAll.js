
function sumAll(arr) {
  arr = arr.sort((a,b) => a-b);
  var el1 = arr[0];
  var el2 = arr[1];

  var sum = 0;
  for(;el1 <= el2;el1++){
    sum += el1;
  }

  return sum;
}

export {
  sumAll,
};
