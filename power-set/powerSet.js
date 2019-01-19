function powerSet(numberSet) {
  if (numberSet.length === 0) {
    return [[]];
  }

  if (numberSet.length === 1) {
    return [[], numberSet];
  }

  const powerSetOfFirstElement = powerSet(numberSet.slice(0, 1));

  const powerSetOfRestElements = numberSet
    .slice(1)
    .reduce(
      (accumulator, current) => [...accumulator, ...accumulator.map(set => [...set, current])],
      powerSetOfFirstElement,
    );

  const fullPowerSet = [...powerSetOfFirstElement, ...powerSetOfRestElements];

  return fullPowerSet;
}

export { powerSet };
