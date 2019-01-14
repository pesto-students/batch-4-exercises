
function sequentialPromise(promiseFunctions) {
  return promiseFunctions.reduce((oldPromiseFunction, newPromiseFunction) => oldPromiseFunction
    .then(data => newPromiseFunction(data)), Promise.resolve());
}

export {
  sequentialPromise,
};
