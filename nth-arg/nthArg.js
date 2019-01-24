function nthArg(index) {
  const functionLength = index > 0 ? index + 1 : 1;
  function curry(...args) {
    const newIndex = index < 0 ? args.length + index : index;
    return args.length >= functionLength
      ? args[newIndex]
      : (...moreArg) => curry(...args, ...moreArg);
  }
  Object.defineProperty(curry, 'length', { value: functionLength });
  return curry;
}

export { nthArg };
