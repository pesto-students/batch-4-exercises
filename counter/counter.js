
function counter() {
  var counter = 0;
  return () => {
    counter = counter + 1;
    return counter;
  }
}

export {
  counter,
};
