const shiftCharBy = n => char => String.fromCharCode(char.charCodeAt() + n);
const shiftCharByOne = shiftCharBy(1);

function alphabeticShift(string) {
  return string
    .split('')
    .map(shiftCharByOne)
    .join('');
}

export { alphabeticShift };
