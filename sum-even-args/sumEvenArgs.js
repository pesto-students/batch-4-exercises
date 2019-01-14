function sumEvenArgs(...numbers) {
  const evenAdder = function (accumaltor, element) {
    if (element % 2 === 0) {
      accumaltor += element
    }
    return accumaltor
  }
  return numbers.reduce(evenAdder,0)
}

export {
  sumEvenArgs,
};