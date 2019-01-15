const containsOnlyNumberals = arr => arr.every(element => Boolean(Number(element)) || element === '0');
const not = cond => !cond;
const cubeRoot = num => Math.cbrt(Number(num));

function arrayCubeRootToJson(numArray) {
  if (not(Array.isArray(numArray))) {
    throw new Error('input should be an array');
  }
  if (not(containsOnlyNumberals(numArray))) {
    throw new Error('input should contain only numbers');
  }

  return numArray.reduce(
    (accumulator, currentNum) => ({
      ...accumulator,
      [currentNum]: cubeRoot(currentNum),
    }),
    {},
  );
}

export { arrayCubeRootToJson };
