function slice(fromIndex, toIndex, list) {
  let startIndex = fromIndex;
  let endIndex = toIndex;
  if (fromIndex === -Infinity) {
    startIndex = 0;
  } else if (fromIndex < 0) {
    startIndex = list.length + fromIndex;
  }
  if (toIndex === Infinity) {
    endIndex = list.length;
  } else if (toIndex < 0) {
    endIndex = list.length + toIndex;
  }
  let result = [];
  const isListOfTypeString = typeof list === 'string';
  if (isListOfTypeString) {
    result = '';
  }
  for (let i = startIndex; i < endIndex; i += 1) {
    if (isListOfTypeString) {
      result += list.charAt(i);
    } else {
      result.push(list[i]);
    }
  }
  return result;
}

export { slice };
