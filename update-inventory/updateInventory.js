
function updateInventory(oldInventry, inventry2) {
  const inventry1 = oldInventry;
  inventry2.forEach((element, index) => {
    const foundElement = inventry1.find(existing => existing[1] === element[1]);
    if (foundElement) {
      inventry1[index][0] += foundElement[0];
    }
  });
  return inventry1;
}

export {
  updateInventory,
};
