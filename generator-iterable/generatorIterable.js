function* generatorIterable() {
  let i = 1;
  while (true) {
    yield i;
    if (i === 5) {
      break;
    }
    i += 1;
  }
}

export { generatorIterable };
