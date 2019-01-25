function pathSatisfies(conditon, path, objectToTraverse) {
  const valueFound = path.reduce((accumulator, currentValue) => accumulator[currentValue], {
    ...objectToTraverse,
  });

  return conditon(valueFound);
}

export { pathSatisfies };
