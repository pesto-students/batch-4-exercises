
const sanitizeIndex = (indexToSanitize, lengthOfArray) => {
  if (indexToSanitize < 0) {
    return lengthOfArray + indexToSanitize;
  }

  return indexToSanitize;
};

function updateObject(...args) {
  if (args.length === 3) {
    const [indexToUpdateAt, valueToUpdateWith, arrayToUpdate] = args;
    const sanitizedIndex = sanitizeIndex(indexToUpdateAt, arrayToUpdate.length);

    return arrayToUpdate.map((el, index) => {
      if (index === sanitizedIndex) {
        return valueToUpdateWith;
      }

      return el;
    });
  }
  return (...moreArgs) => updateObject(...args, ...moreArgs);
}

export {
  updateObject,
};
