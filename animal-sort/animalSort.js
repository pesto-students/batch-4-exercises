
function animalSort(arrOfAnimals) {
  return arrOfAnimals.sort(
    (animalFirst, animalSecond) => {
      if (animalFirst.numberOfLegs === animalSecond.numberOfLegs) {
        return animalFirst.name > animalSecond.name;
      }
      return animalFirst.numberOfLegs > animalSecond.numberOfLegs;
    },
  );
}

export {
  animalSort,
};
