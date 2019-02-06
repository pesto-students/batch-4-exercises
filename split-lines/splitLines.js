
function splitLines(stringToSplit, { preserveNewlines = false } = {}) {
  if (preserveNewlines) {
    return stringToSplit.split(/\s*[\r\n|\n]/);
  }
  return stringToSplit.split(/\r\n|\n/);
}

export {
  splitLines,
};
