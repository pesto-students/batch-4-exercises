function chunkArrayInGroups(ary, n) {
  const newAry = [];
  for (let i = 0; i < ary.length; i += n) {
    const newBracket = i + n;
    const innerAry = [];
    for (let j = i; j < ary.length && j < newBracket; j += 1) {
      innerAry.push(ary[j]);
    }
    newAry.push(innerAry);
  }
  return newAry;
}

export { chunkArrayInGroups };
