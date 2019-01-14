
function promiseAllProps(promiseObject) {
  return new Promise((resolve) => {
    const resultObject = Object.keys(promiseObject).reduce((accumulator, currentKey) => {
      const currentPromise = promiseObject[currentKey];
      currentPromise.then((value) => {
        accumulator[currentKey] = value;
      });
      return accumulator;
    }, {});
    resolve(resultObject);
  });
}

export {
  promiseAllProps,
};
