function isomorphic([firstWord, secondWord]) {
  if (firstWord.length !== secondWord.length) {
    return false;
  }
  const letterMap = new Map();
  for (let i = 0; i < firstWord.length; i += 1) {
    const charFirstWord = firstWord.charAt(i);
    if (!letterMap.has(charFirstWord)) {
      letterMap.set(charFirstWord, secondWord.charAt(i));
    } else {
      const temp = letterMap.get(charFirstWord);
      if (secondWord.charAt(i) !== temp) {
        return false;
      }
    }
  }
  return true;
}

export { isomorphic };
