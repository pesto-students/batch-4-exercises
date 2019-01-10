function updateInventory(inventory, updates) {
  for (const [count, name] of updates) {
    const updateInInventory = inventory.find(item => item[1] === name);
    if (updateInInventory) {
      updateInInventory[0] += parseInt(count, 10);
    } else {
      inventory.push([count, name]);
    }
  }
  return inventory.sort((a, b) => a[1].localeCompare(b[1]));
}

export { updateInventory };
