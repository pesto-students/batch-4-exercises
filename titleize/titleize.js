const isInAlphabet = character => character.match(/\W/);
const getLastChar = string => string.substr(-1);
const lastCharacterIsInAlphabet = string => isInAlphabet(getLastChar(string));

function titleize(string) {
  return Array.from(string).reduce((accumulator, currentChar) => {
    if (accumulator === '') {
      return currentChar.toUpperCase();
    }

    if (lastCharacterIsInAlphabet(accumulator)) {
      return accumulator + currentChar.toUpperCase();
    }

    return accumulator + currentChar.toLowerCase();
  }, '');
}

export { titleize };
