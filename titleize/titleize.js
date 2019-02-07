const isCharacter = char => char.length === 1 && char.match(/[a-z]/i);
function titleize(characters) {
  let shouldCapitalize = true;
  let transformedCharacters = '';
  for (const char of characters) {
    if (isCharacter(char)) {
      if (shouldCapitalize) {
        transformedCharacters += char.toUpperCase();
      } else {
        transformedCharacters += char.toLowerCase();
      }
      shouldCapitalize = false;
    } else {
      transformedCharacters += char;
      shouldCapitalize = true;
    }
  }
  return transformedCharacters;
}

export { titleize };
