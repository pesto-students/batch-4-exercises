
function longestWordInString(str) {
  return str.split(' ').reduce((max, element) => {
    if (max < element.length) {
      return element.length;
    }
    return max;
  }, 0);
}

export {
  longestWordInString,
};
