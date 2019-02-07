
function titleize(sentence) {
  if (sentence === '') {
    return sentence;
  }
  const separators = [' ', '-'];
  const sentenceChars = [...sentence];
  const changeCase = (accm, char) => {
    if (separators.includes(accm[accm.length - 1])) {
      return accm.concat(char.toUpperCase());
    }
    return accm.concat(char.toLowerCase());
  };
  return sentenceChars.slice(1).reduce(changeCase, sentenceChars[0].toUpperCase());
}

export {
  titleize,
};
