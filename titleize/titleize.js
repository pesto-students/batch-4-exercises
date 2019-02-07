const isCharacter = char => char.length === 1 && char.match(/[a-z]/i);
function titleize(words) {
  let shouldCapitalize = true;
  let newSentence = '';
  for (const char of words) {
    if (isCharacter(char)) {
      if (shouldCapitalize) {
        newSentence += char.toUpperCase();
      } else {
        newSentence += char.toLowerCase();
      }
      shouldCapitalize = false;
    } else {
      newSentence += char;
      shouldCapitalize = true;
    }
  }
  return newSentence;
}

export { titleize };
