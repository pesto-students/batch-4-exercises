function animalSort(array) {
  return array.sort(
    (obj1, obj2) => obj1.numberOfLegs - obj2.numberOfLegs || (obj1.name >= obj2.name ? 1 : -1),
  );
}

export { animalSort };
