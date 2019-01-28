const getLastIndex = (list, itemToFind, foundIndex, prevIndex) => {
  if (foundIndex === -1) {
    return prevIndex;
  }

  let newPrevIndex = -1;
  const newIndex = list.slice(foundIndex + 1).findIndex(element => element === itemToFind);
  if (newIndex !== -1) newPrevIndex = newIndex;
  return getLastIndex(list, itemToFind, newIndex, newPrevIndex);
};

function lastIndexOf(itemToFind, list) {
  return getLastIndex(list, itemToFind, 0, -1);
}

export { lastIndexOf };
