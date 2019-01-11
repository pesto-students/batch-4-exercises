
function lowercaseKeys(inputObj) {
  const returnObj = {};

  Object.entries(inputObj).forEach(entry => {
    const key = entry[0];
    const value = entry[1];

    const tempKey = key.toString().toLowerCase();

    returnObj[tempKey] = value;
  });

  return returnObj;
}

export {
  lowercaseKeys,
};
