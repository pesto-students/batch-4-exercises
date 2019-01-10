
function alternatingCharacters(arr) {
  return arr.map((word) => {
    let deleteCount = 0;
    for (let i = 0; i < word.length - 1; i += 1) {
      if (word[i] === word[i + 1]) deleteCount += 1;
    }
    return deleteCount;
  });
}

export {
  alternatingCharacters,
};
