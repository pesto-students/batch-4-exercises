
function objectAssign(...objects) {
  return objects.reduce((accumulator, currentValue) => Object.assign(accumulator, currentValue));
}

export {
  objectAssign,
};
