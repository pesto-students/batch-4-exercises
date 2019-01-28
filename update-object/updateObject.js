import { isNegative, not, isOutOfRange } from '../utils';

function updateObject(givenIndex, newValue, list) {
  if (not(newValue)) {
    return updateObject.bind(null, givenIndex);
  }

  if (not(list)) {
    return updateObject.bind(null, givenIndex, newValue);
  }

  const listCopy = [...list];

  let calculatedIndex = givenIndex;

  if (isNegative(givenIndex)) {
    calculatedIndex = list.length + givenIndex;
  }

  const isOutOfBounds = isOutOfRange(0, list.length);

  if (isOutOfBounds(calculatedIndex)) {
    return listCopy;
  }

  listCopy[calculatedIndex] = newValue;

  return listCopy;
}

export { updateObject };
