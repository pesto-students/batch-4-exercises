function objectKeys(obj) {
  const keyArray = [];
  for (const x in obj) {
    if (x) {
      keyArray.push(x);
    }
  }
  return keyArray;
}

export {
  objectKeys,
};
