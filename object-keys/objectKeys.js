
function objectKeys(obj) {
  let keyArray = [];
  for (const key in obj) {
    keyArray.push(key);
  }
  return keyArray;
}

export {
  objectKeys,
};
