function sequentialPromise(promises) {
  return promises.reduce((accumulator, current) => accumulator.then(current), Promise.resolve());
}

export { sequentialPromise };
