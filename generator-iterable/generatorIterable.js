
function* generatorIterable() {
  let value = 1;
  while (value < 6) {
    yield value;
    value += 1;
  }
}

export {
  generatorIterable,
};
