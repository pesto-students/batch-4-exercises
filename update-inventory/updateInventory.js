function updateInventory(ary1, ary2) {
  const newAry = [];
  function findItem(tAry, val) {
    return tAry.find(item => item[1] === val);
  }
  for (let i = 0; i < ary1.length; i += 1) {
    const el1 = ary1[i];
    const el2 = findItem(ary2, el1[1]);
    const newEl = [...el1];
    if (el2) {
      newEl[0] += el2[0];
    }
    newAry.push(newEl);
  }
  for (let i = 0; i < ary2.length; i += 1) {
    const el1 = ary2[i];
    const el2 = findItem(ary1, el1[1]);
    if (!el2) {
      newAry.push(el1);
    }
  }
  newAry.sort((el1, el2) => el1[1].localeCompare(el2[1]));
  return newAry;
}

export { updateInventory };
