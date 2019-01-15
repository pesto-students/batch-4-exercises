
function arrayAddition(array1, array2) {
  let longerArray = [];
  let shorterArray = [];
  if ((array1.length === 0) || (array2.length === 0)) {
    throw new Error('The lengths of the array does not match');
  }
  if (array2.length > array1.length) {
    longerArray = array2;
    shorterArray = array1;
  } else {
    longerArray = array1;
    shorterArray = array2;
  }
  let resultant = [];
  shorterArray.forEach((_element, index) => {
    if ((typeof longerArray[index] !== 'number') || (typeof shorterArray[index] !== 'number')) {
      throw new Error('Elements of the array are not numbers');
    }
    resultant.push(longerArray[index] + shorterArray[index]);
  });
  resultant = resultant.concat(longerArray.slice(shorterArray.length));
  return resultant;
}

export {
  arrayAddition,
};
