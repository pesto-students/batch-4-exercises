function allOfConditions(...functions) {
  return (input) => {
    for (const fun of functions) {
      if (!fun(input)) {
        break;
      }
    }
  };
}

export { allOfConditions };
