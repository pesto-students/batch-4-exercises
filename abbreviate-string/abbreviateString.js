
function abbreviateString(inputStr) {
  if(typeof inputStr != 'string'){
    throw new Error();
  }
  const strArray = inputStr.split(' ');
  const firstWord = strArray[0];
  const lastWord = strArray[strArray.length - 1];

  const lastWordInitial = lastWord.split('')[0].toUpperCase();

  return firstWord + ' ' + lastWordInitial + '.';
}

export {
  abbreviateString,
};
