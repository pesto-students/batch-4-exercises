const shiftByOne = character => String.fromCharCode(character.charCodeAt(0) + 1);

function alphabeticShift(stringToShift) {
  const stringArray = stringToShift.split('');
  const shiftedStringArray = stringArray.map(character => shiftByOne(character));
  const shiftedString = shiftedStringArray.join('');
  return shiftedString;
}

export {
  alphabeticShift,
};
