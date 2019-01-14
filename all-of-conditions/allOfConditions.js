const not = val => !val;

function allOfConditions(...argsFn) {
  return (input) => {
    for (const fn of argsFn) {
      if (not(fn(input))) {
        break;
      }
    }
  };
}

export { allOfConditions };
