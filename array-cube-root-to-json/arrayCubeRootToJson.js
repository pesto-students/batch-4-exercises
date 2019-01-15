const isNotArray = value => !Array.isArray(value);
const isNotNumber = value => !(typeof value === 'number' || (typeof parseFloat(value) === 'number' && !Number.isNaN(parseFloat(value))));

function arrayCubeRootToJson(numbers) {
  if (isNotArray(numbers)) {
    throw new Error('Not an array');
  }
  return numbers.reduce((accumulator, currentValue) => {
    if (isNotNumber(currentValue)) {
      throw new Error('Not a valid number');
    }
    const currentObj = {};
    currentObj[currentValue] = Math.cbrt(currentValue);
    return { ...accumulator, ...currentObj };
  }, {});
}

export {
  arrayCubeRootToJson,
};
