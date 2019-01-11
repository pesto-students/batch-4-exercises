function abbreviateString(str) {
  if (typeof str !== 'string') {
    throw new Error('');
  }
  const strSplitAry = str.split(' ');
  const firstName = strSplitAry[0];
  const lastName = strSplitAry[strSplitAry.length - 1];
  return `${firstName} ${lastName.charAt(0).toUpperCase()}.`;
}

export { abbreviateString };
