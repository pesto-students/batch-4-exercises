function simpleIterable() {
  return {
    [Symbol.iterator]() {
      let counter = 0;
      return {
        next() {
          if (counter === 5) {
            return {
              value: undefined,
              done: true,
            };
          }
          counter += 1;
          return {
            value: counter,
            done: false,
          };
        },
      };
    },
  };
}

export {
  simpleIterable,
};