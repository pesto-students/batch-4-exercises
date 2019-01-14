
function promiseAllProps(promiseObject) {
  const promiseKeys = Object.keys(promiseObject);
  const promisesToResolve = Object.values(promiseObject);

  const resolvedPromises = Promise.all(promisesToResolve);

  return resolvedPromises.then(result => result.reduce((acc, el, index) => acc[promiseKeys[index]] = el,{}));
}

export {
  promiseAllProps,
};
