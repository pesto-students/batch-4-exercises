function binaryAgent(str) {
  return str
    .split(' ')
    .reduce((acc, item) => acc + String.fromCharCode(parseInt(item, 2)), '');
}

export { binaryAgent };
