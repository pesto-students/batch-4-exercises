
function sequentialPromise(allPromises) {
  return allPromises.reduce((accumalator, promise) => accumalator.then(promise), Promise.resolve());
}

export {
  sequentialPromise,
};
