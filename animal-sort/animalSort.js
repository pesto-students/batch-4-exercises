const animalsComparator = (animal1, animal2) => {
  const legCountDifference = animal1.numberOfLegs - animal2.numberOfLegs;

  if (legCountDifference === 0) {
    return animal1.name.localeCompare(animal2.name);
  }
  return legCountDifference;
};

function animalSort(animals) {
  return animals.sort(animalsComparator);
}

export { animalSort };
