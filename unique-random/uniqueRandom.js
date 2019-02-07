function uniqueRandom(low, high) {
  let previouslyReturned;
  return () => {
    let randomNumber = low + Math.floor(Math.random() * high);

    while (randomNumber === previouslyReturned) {
      randomNumber = low + Math.floor(Math.random() * high);
    }

    previouslyReturned = randomNumber;
    return randomNumber;
  };
}

export { uniqueRandom };
