
function counter() {
  let z = 0;
  return () => {
    z += 1;
    return z;
  };
}

export {
  counter,
};
