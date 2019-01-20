function countingAnagrams(wordList) {
  const wordArray = wordList.split(' ');

  const sortedWordCount = wordArray.reduce((counterObject, word) => {
    const sortedWord = word
      .split('')
      .sort()
      .join('');

    if (Object.keys(counterObject).includes(sortedWord)) {
      return { ...counterObject, [sortedWord]: counterObject[sortedWord] + 1 };
    }
    return { ...counterObject, [sortedWord]: 1 };
  }, {});

  return Object.entries(sortedWordCount).reduce((anagramCount, [word, frequency]) => {
    if (word.length > 1 && frequency > 1) {
      return anagramCount + 1;
    }
    return anagramCount;
  }, 0);
}

export { countingAnagrams };
