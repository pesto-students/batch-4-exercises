const isPresentInArray = (start, end, array, number) => {
  for (let i = start; i < end; i += 1) {
    if (array[i] === number) {
      return i;
    }
  }
  return -1;
};

function binarySearch(numbers, numberToSearch) {
  const halfLength = parseInt(numbers.length / 2, 10);
  const middleNumber = numbers[halfLength];
  if (numberToSearch <= middleNumber) {
    return isPresentInArray(0, middleNumber, numbers, numberToSearch);
  }
  return isPresentInArray(halfLength, numbers.length, numbers, numberToSearch);
}

export {
  binarySearch,
};
