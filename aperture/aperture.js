function aperture(n, array) {
  if (array.length < n) return [];
  const result = [];
  for (let i = 0; i + n <= array.length; i += 1) {
    result.push(array.slice(i, i + n));
  }
  return result;
}

export { aperture };
