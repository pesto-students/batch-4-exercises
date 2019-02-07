const isInAlphabet = character => character.match(/\W/);
const isEmpty = list => list.length === 0;
const getLastChar = string => string.substr(-1);
const lastCharacterIsInAlphabet = string => isInAlphabet(getLastChar(string));

function titleize(string) {
  return Array.from(string).reduce((acc, cu) => {
    if (lastCharacterIsInAlphabet(acc) || isEmpty(acc)) {
      return acc + cu.toUpperCase();
    }

    return acc + cu.toLowerCase();
  }, '');
}

export { titleize };
