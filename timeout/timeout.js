
function timeout(name) {
  return new Promise(resolve => resolve(`Hello ${name}`));
}

export {
  timeout,
};
