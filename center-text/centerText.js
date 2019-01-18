/* This problem is not done yet, will come back to it later. */

const splitIntoChunksOf = (sentence, chunkLength) => sentence.split(' ').reduce((accumulator, currentWord) => {
  if (accumulator.length === 0 || accumulator[accumulator.length - 1].length >= chunkLength - 1) {
    return [...accumulator, ` ${currentWord}`];
  }
  const lastWord = accumulator.pop();
  const newLastWord = `${lastWord} ${currentWord}`;
  return [...accumulator, newLastWord];
}, []);

function centerText(sentence, chunkLength) {
  const splitedSentence = splitIntoChunksOf(sentence, chunkLength);
  return splitedSentence;
}

export { centerText };
