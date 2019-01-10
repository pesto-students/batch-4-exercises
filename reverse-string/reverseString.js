
function reverseString(str) {
  const strLength = str.length - 1;
  return str.split('').map((element, index) => str[strLength - index]).join('');
}

export {
  reverseString,
};
