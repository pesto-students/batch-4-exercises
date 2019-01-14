function tripleAndFilter(numbers) {
  return numbers.map(num => num * 3).filter(num => num % 5 === 0);
}

export { tripleAndFilter };
