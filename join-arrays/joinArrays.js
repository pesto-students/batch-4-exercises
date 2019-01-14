function joinArrays(...arrays) {
  return arrays.reduce((acc, cu) => {
    cu.forEach(el => acc.push(el));
    return acc;
  }, []);
}

export { joinArrays };
