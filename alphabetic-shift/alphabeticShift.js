function alphabeticShift(unshiftedString) {
  const shiftByN = n => char => String.fromCharCode(char.charCodeAt() + n);
  const shiftBy1 = shiftByN(1);
  return unshiftedString.split('').map(shiftBy1).join('');
}

export {
  alphabeticShift,
};
