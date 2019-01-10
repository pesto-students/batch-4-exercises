function largeOfFour(arr) {
  const largeElementInEachArray = [];
  for (const x of arr) {
    const newValue = x.reduce((max, element) => {
      if (element > max) {
        return element;
      }
      return max;
    }, -1);
    largeElementInEachArray.push(newValue);
  }
  return largeElementInEachArray;
}

export {
  largeOfFour,
};
