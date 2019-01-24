const not = condition => !condition;

function omit(keysToRemove, object) {
  let objectCopy = {};

  for (const key in object) {
    if (not(keysToRemove.includes(key))) {
      objectCopy = { ...objectCopy, [key]: object[key] };
    }
  }

  return objectCopy;
}

export { omit };
