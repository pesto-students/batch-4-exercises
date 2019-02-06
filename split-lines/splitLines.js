
function splitLines(stringToSplit, { preserveNewlines = false } = {}) {
  if (preserveNewlines) {
    return stringToSplit.split(/(\w*(\r\n|\n))/);
  }
  return stringToSplit.split(/\r\n|\n/);
}

export {
  splitLines,
};
