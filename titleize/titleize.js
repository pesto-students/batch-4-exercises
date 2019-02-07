const capitalizeWord = word => word.charAt(0).toUpperCase() + word.slice(1);

function titleize(originalString) {
  const wordDistincterInString = originalString.split('').find((char) => {
    const asciiValue = char.charCodeAt(0);
    if (((65 <= asciiValue) && (asciiValue <= 90)) || ((97 <= asciiValue) && (asciiValue <= 122))) {
      return false;
    }
    return true;
  });
  const splittedStringOnNonChar = originalString.toLowerCase().split(/\W/);
  const firstWord = capitalizeWord(splittedStringOnNonChar.shift());
  const capitalizedStringVersion = splittedStringOnNonChar.reduce((acc, word) => {
    acc += wordDistincterInString + capitalizeWord(word);
    return acc;
  }, firstWord);
  return capitalizedStringVersion;
}

export {
  titleize,
};
