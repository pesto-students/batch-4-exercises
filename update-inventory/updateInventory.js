function updateInventory(inventory, updates) {
  // const newInventory = [];
  // for (const item of inventory) {
  //   const itemInUpdates = updates.find(updateItem => updateItem[1] === item[1]);
  //   if (itemInUpdates) {
  //     const newItem = [item[0] + itemInUpdates[0], itemInUpdates[1]];
  //     newInventory.push(newItem);
  //   } else {
  //     newInventory.push(item);
  //   }
  // }
  // updates.forEach((itemInUpdates) => {
  //   const addedToInventory = newInventory.find(item => item[1] === itemInUpdates[1]);
  //   if (!addedToInventory) {
  //     newInventory.push(itemInUpdates);
  //   }
  // });
  // return newInventory;
}

export { updateInventory };
