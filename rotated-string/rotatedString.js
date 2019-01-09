
function rotatedString(first, second) {
  if (first.slice(2, 5) + first.slice(0, 2) === second) return true;
  return false;
}

export {
  rotatedString,
};
