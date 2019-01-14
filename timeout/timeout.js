function timeout(argStr) {
  return Promise.resolve(`Hello ${argStr}`);
}

export { timeout };
