function isPalindrome(str) {
  const newStr = str
    .toString()
    .replace(/[^a-zA-Z0-9]/g, '')
    .toLowerCase();

  return (
    newStr
      .split('')
      .reverse()
      .join('') === newStr
  );
}

export { isPalindrome };
