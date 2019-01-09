
function reverseString(str) {
  var arr = str.split('');
  arr = arr.reverse().join('');
  return arr;
}

export {
  reverseString,
};
