
function argsString(str, wordsArray) {
  return wordsArray.reduce((accumulator, currentValue) => {
    const stringToReplace = '{}';
    const modifiedString = accumulator.replace(stringToReplace, currentValue);
    return modifiedString;
  }, str);
}

export {
  argsString,
};
