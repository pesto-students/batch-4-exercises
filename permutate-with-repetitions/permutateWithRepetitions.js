function generatePermutations(array, currentIndex) {
  if (currentIndex === 0) {
    return array.map(el => [el]);
  }

  const restOfPermutations = generatePermutations(array, currentIndex - 1);

  return array.reduce((allPermutations, firstElement) => {
    restOfPermutations.forEach((restElements) => {
      allPermutations.push([firstElement, ...restElements]);
    });
    return allPermutations;
  }, []);
}

function permutateWithRepetitions(array) {
  return generatePermutations(array, array.length - 1);
}

export { permutateWithRepetitions };
