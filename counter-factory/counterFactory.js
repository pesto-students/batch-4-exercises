
function counterFactory() {
  var counter = 0;
  return {
    increment: () => {
      counter = counter + 1;
      return counter;
    },
    decrement: () => {
      counter = counter - 1;
      return counter;
    }
  }
}

export {
  counterFactory,
};
