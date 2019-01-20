function powerSet(numberSet) {
  return numberSet.reduce(
    (accumulator, current) => [...accumulator, ...accumulator.map(set => [...set, current])],
    [[]],
  );
}

export { powerSet };
