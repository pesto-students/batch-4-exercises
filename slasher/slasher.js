function slasher(ary, n) {
  const resAry = [];
  for (let i = n; i < ary.length; i += 1) {
    resAry.push(ary[i]);
  }
  return resAry;
}

export { slasher };
