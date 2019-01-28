const getNameIfFunction = (item) => {
  if (typeof item === 'function') {
    return item.name;
  }

  return item;
};

function lastIndexOf(searchItem, list) {
  return list.reduce((acc, el, index) => {
    if (getNameIfFunction(el) === getNameIfFunction(searchItem)) {
      return index;
    }

    return acc;
  }, -1);
}

export {
  lastIndexOf,
};
