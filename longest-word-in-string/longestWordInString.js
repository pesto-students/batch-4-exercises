
function longestWordInString(str) {
  var arr = str.split(' ');
  arr = arr.map(el => el.length);

  return Math.max.apply(Math,arr);
}

export {
  longestWordInString,
};
