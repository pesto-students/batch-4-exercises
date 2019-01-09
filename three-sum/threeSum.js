function threeSum(ary, num) {
  if (typeof num !== 'number' || typeof ary !== 'object' || ary.length < 3) {
    return () => {
      throw new Error();
    };
  }
  for (let i = 0; i < ary.length; i += 1) {
    for (let j = i + 1; j < ary.length; j += 1) {
      for (let k = j + 1; k < ary.length; k += 1) {
        if (ary[i] + ary[j] + ary[k] === num) {
          return [ary[i], ary[j], ary[k]];
        }
      }
    }
  }
  return null;
}

export { threeSum };
