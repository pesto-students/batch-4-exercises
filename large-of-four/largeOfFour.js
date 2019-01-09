function arrMax(arr){
  return Math.max.apply(Math,arr);
}
function largeOfFour(arr) {
  return [
    arrMax(arr[0]),
    arrMax(arr[1]),
    arrMax(arr[2]),
    arrMax(arr[3]),
  ];
}

export {
  largeOfFour,
};
