
function findElement(arr,test) {
  for(var i = 0;i < arr.length; i++){
    if(test(arr[i])){
      return arr[i];
    }
  }

  return undefined;
}

export {
  findElement,
};
