function shiftASCII(character){
  let charASCII = character.charCodeAt(0);
  charASCII += 1;

  return String.fromCharCode(charASCII);

}

function alphabeticShift(inputString) {
  return inputString.split('').map(shiftASCII).join('');
}

export {
  alphabeticShift,
};
