
function* generatorIterable() {
  let count = 0;
  while (count < 5) {
    count += 1;
    yield count;
  }
}

export {
  generatorIterable,
};
