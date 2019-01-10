
function chunkArrayInGroups(arr, totalChunks) {
  const output = [];
  for (let i = 0; i < Math.ceil(arr.length / totalChunks); i += 1) {
    const newArr = [];
    let count = 0;
    while (count < totalChunks) {
      newArr.push(arr[i * totalChunks + count]);
      count += 1;
    }
    output.push(newArr);
  }
  return output;
}

export {
  chunkArrayInGroups,
};
