function diffArray(a, b) {
  const aFilter = a.filter(item => !b.includes(item));
  const bFilter = b.filter(item => !a.includes(item));
  return [...aFilter, ...bFilter];
}

export { diffArray };
