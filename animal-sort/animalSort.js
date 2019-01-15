
const compareStrings = (a, b) => {
  const firstString = a.toUpperCase();
  const secondString = b.toUpperCase();
  if (firstString < secondString) {
    return -1;
  }
  if (firstString > secondString) {
    return 1;
  }
  return 0;
};

function animalSort(animals) {
  return animals.sort((a, b) => {
    const firstAnimalLegs = a.numberOfLegs;
    const secondAnimalLegs = b.numberOfLegs;
    if (firstAnimalLegs === secondAnimalLegs) {
      return compareStrings(a.name, b.name);
    }
    return firstAnimalLegs - secondAnimalLegs;
  });
}

export {
  animalSort,
};
