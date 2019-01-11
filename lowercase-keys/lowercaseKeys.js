
function lowercaseKeys(obj) {
  const newLowerKeyObj = {};
  for (const x in obj) {
    if (obj[x]) {
      newLowerKeyObj[x.toLowerCase()] = obj[x];
    }
  }
  return newLowerKeyObj;
}

export {
  lowercaseKeys,
};
