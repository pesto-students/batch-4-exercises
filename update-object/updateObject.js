import { isNegative, not, isOutOfRange } from '../utils';

function updateObject(givenIndex, newValue, list) {
  if (not(newValue)) {
    return updateObject.bind(null, givenIndex);
  }

  if (not(list)) {
    return updateObject.bind(null, givenIndex, newValue);
  }

  const listCopy = [...list];

  let calculatedIndex;

  if (isNegative(givenIndex)) {
    calculatedIndex = list.length + givenIndex;
  } else {
    calculatedIndex = givenIndex;
  }

  const isOutOfBoundsOfList = isOutOfRange(0, list.length);

  if (isOutOfBoundsOfList(calculatedIndex)) {
    return listCopy;
  }

  listCopy[calculatedIndex] = newValue;

  return listCopy;
}

export { updateObject };
