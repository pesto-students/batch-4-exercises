
function promiseAllProps(promiseObject) {
  const resultant = {}
  promiseObject['foo'].then((result) => {
    resultant['foo'] = result
  });
  promiseObject['bar'].then((result) => {
    resultant['bar'] = result
  });
  return Promise.resolve(resultant)
}

export {
  promiseAllProps,
};
