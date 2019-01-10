
function repeatStringNumTimes(str, multi) {
  let newString = '';
  for (let x = 0; x < multi; x += 1) {
    newString += str;
  }
  return newString;
}

export {
  repeatStringNumTimes,
};
