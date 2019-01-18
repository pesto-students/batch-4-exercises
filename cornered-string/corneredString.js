const capitalizeAndJoinWith = joiner => letterArray => letterArray
  .map(letter => letter.toUpperCase())
  .join(joiner);

function corneredString(word) {
  const lettersInFirstLine = Array.from(word);
  // remove first character because it is already printed in first line;
  const lettersInNextLines = Array.from(word).slice(1);
  const firstLine = capitalizeAndJoinWith(' ')(lettersInFirstLine);
  const nextLines = capitalizeAndJoinWith('\n\n')(lettersInNextLines);
  return `${firstLine}\n\n${nextLines}`.trim();
}

export { corneredString };
