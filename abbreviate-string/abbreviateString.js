
function abbreviateString(str) {
  const stringsArray = str.split(' ');
  const firstWord = stringsArray[0];
  const lastWord = stringsArray[stringsArray.length - 1];
  const lastWordAbbreviation = `${lastWord[0].toUpperCase()}.`;
  return `${firstWord} ${lastWordAbbreviation}`;
}

export {
  abbreviateString,
};
