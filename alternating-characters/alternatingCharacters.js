function countCharDrops(str) {
  let count = 0;
  let i = 0;
  let j = 1;

  while (j < str.length) {
    if (str[j] === str[i]) {
      count += 1;
    } else {
      i = j;
    }
    j += 1;
  }
  return count;
}

function alternatingCharacters(args) {
  return args.map(countCharDrops);
}

export { alternatingCharacters };
