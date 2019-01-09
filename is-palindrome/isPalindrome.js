function isPalindrome(val) {
  const valStr = String(val);
  const fVal = valStr.toLowerCase().replace(/[^a-z0-9]/g, '');
  return (
    JSON.stringify(fVal)
    === JSON.stringify(
      fVal
        .split('')
        .reverse()
        .join(''),
    )
  );
}

export { isPalindrome };
