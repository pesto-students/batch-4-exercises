function timeout(name) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Hello ${name}`));
  });
}

export { timeout };
