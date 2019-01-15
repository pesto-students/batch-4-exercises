function* generatorIterable() {
  let val = 1;
  while (true) {
    yield val;
    if (val === 5) {
      break;
    }
    val += 1;
  }
}

export { generatorIterable };
