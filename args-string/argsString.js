function argsString(stringLiteral, args) {
  return stringLiteral
    .split('')
    .map((char, index, thisArray) => {
      if (char === '{' && thisArray[index + 1] === '}') {
        return args.shift();
      }
      if (char === '}' && thisArray[index - 1] === '{') {
        return '';
      }
      return char;
    })
    .join('');
}

export { argsString };
