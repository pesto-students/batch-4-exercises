
function isPalindrome(val) {
  if(typeof val == 'number'){
    val = val.toString();
  }
  var arr = val.split('');
  var revArr = arr.slice().reverse();

  for(var i = 0;i<arr.length;i++){
    if(arr[i] != revArr[i]){
      return false;
    }
  }

  return true;
}

export {
  isPalindrome,
};
