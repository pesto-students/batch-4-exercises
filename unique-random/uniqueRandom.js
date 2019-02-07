const getRandomFromRange = (low, high) => low + Math.floor(Math.random() * high);

function uniqueRandom(low, high) {
  let previouslyReturned;

  return () => {
    let randomNumber;
    do {
      randomNumber = getRandomFromRange(low, high);
    } while (randomNumber === previouslyReturned);

    previouslyReturned = randomNumber;
    return randomNumber;
  };
}

export { uniqueRandom };
