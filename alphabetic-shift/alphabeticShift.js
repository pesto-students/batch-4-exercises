const shiftChar = (ch) => {
  let charCode = ch.charCodeAt(0);
  charCode += 1;
  if (charCode === 91) charCode = 65;
  if (charCode === 123) charCode = 98;
  return String.fromCharCode(charCode);
};
function alphabeticShift(str) {
  return str
    .split('')
    .map(shiftChar)
    .join('');
}

export { alphabeticShift };
