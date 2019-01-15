
function timeout(subject) {
  return new Promise((resolve) => {
    resolve(`Hello ${subject}`);
  });
}

export {
  timeout,
};
