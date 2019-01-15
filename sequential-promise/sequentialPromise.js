async function sequentialPromise(promiseAry) {
  return promiseAry.reduce(
    (acc, promise) => acc.then(promise),
    Promise.resolve(),
  );
}

export { sequentialPromise };
