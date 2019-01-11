function alienAlphabet(words) {
  return words.reduce((acc, word) => {
    if (!acc.includes(word[0])) {
      acc.push(word[0]);
    }
    return acc;
  }, []);
}

export { alienAlphabet };
