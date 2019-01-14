
function allPromises(promises) {
  return new Promise((resolve) => {
    Promise.all(promises).then((values) => {
      resolve(values);
    });
  });
}

export {
  allPromises,
};
