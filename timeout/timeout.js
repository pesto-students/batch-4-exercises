
function timeout(str) {
  return Promise.resolve(`Hello ${str}`);
}

export {
  timeout,
};
