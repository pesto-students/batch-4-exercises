
function alphabeticShift(str) {
  const oneCharShiftedString = str.split('').map((char) => {
    const asciiValueOfChar = char.charCodeAt(0);
    return String.fromCharCode(asciiValueOfChar + 1);
  });
  return oneCharShiftedString.join('');
}

export {
  alphabeticShift,
};
