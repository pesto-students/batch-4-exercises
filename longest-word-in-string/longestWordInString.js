function longestWordInString(str) {
  return Math.max(...str.split(' ').map(word => word.length));
}

export { longestWordInString };
