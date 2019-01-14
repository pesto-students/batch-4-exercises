
function sequentialPromise(promises) {
  return promises.reduce((accumulator, currentPromise) => accumulator
    .then(currentPromise), Promise.resolve());
}

export {
  sequentialPromise,
};
