
function slasher(arr,slash) {
  return arr.filter((el,index) => index >= slash);
}

export {
  slasher,
};
