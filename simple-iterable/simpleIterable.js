function simpleIterable() {
  let count = 0;
  return {
    [Symbol.iterator]() {
      return {
        next() {
          if (count < 5) {
            count += 1;
            return {
              done: false,
              value: count,
            };
          }
          return {
            done: true,
          };
        },
      };
    },
  };
}

export { simpleIterable };
