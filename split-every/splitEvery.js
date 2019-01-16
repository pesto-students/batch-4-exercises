function splitEvery(number, list) {
  if (number < 1) {
    throw new Error();
  }
  const isListOfTypeString = typeof list === 'string';
  const result = [];
  for (let i = 0; i < list.length; i += number) {
    let innerResult = [];
    if (isListOfTypeString) {
      innerResult = '';
    }
    for (let j = i; j < list.length && j < i + number; j += 1) {
      if (isListOfTypeString) {
        innerResult += list.charAt(j);
      } else {
        innerResult.push(list[j]);
      }
    }
    result.push(innerResult);
  }
  return result;
}

export { splitEvery };
