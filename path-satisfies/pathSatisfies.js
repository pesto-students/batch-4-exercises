function pathSatisfies(conditon, path, objectToTraverse) {
  const valueFound = path.reduce((accumulator, currentKey) => accumulator[currentKey], {
    ...objectToTraverse,
  });

  return conditon(valueFound);
}

export { pathSatisfies };
