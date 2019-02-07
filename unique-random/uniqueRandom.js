
function uniqueRandom(start, end) {
  let previous = start - 1;
  const range = end - start;
  const wrapper = () => {
    let current = Math.floor(Math.random() * (end - start + 1)) + start;
    while (previous === current) {
      current = Math.floor(Math.random() * (end - start + 1)) + start;
    };
    previous = current;
    return current;
  };
  return wrapper;
}

export {
  uniqueRandom,
};
