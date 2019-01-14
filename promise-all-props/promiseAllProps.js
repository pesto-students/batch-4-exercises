
function promiseAllProps(promiseObj) {
  const promises = [];
  const keys = [];
  for (const x in promiseObj) {
    if (promiseObj[x]) {
      keys.push(x);
      promises.push(promiseObj[x]);
    }
  }
  return Promise.all(promises).then((result) => {
    const valueObj = {};
    result.map((value, index) => { valueObj[keys[index]] = value; return 0; });
    return valueObj;
  });
}

export {
  promiseAllProps,
};
