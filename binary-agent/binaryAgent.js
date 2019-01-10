function binaryAgent(binaryArray) {
  return binaryArray.split(' ').reduce((newStr, currentBinary) => newStr + String.fromCharCode(parseInt(currentBinary, 2)), '');
}

export {
  binaryAgent,
};
