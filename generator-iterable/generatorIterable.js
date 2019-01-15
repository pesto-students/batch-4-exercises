function* generatorIterable() {
  let value = 0;
  while (value < 5) {
    value += 1;
    yield value;
  }
}

export { generatorIterable };
