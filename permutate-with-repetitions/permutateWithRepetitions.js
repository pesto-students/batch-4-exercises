function permutateWithRepetitions(alphabets) {

  const permutations = []

  for (let index = 0; index < alphabets.length; index++) {
    const tempArray = []
    for (let inner = 0; inner < alphabets.length; inner++) {
      tempArray.push(alphabets[inner])

    }
    permutations.push(tempArray)

  }
  console.log(permutations)

}

export {
  permutateWithRepetitions,
};