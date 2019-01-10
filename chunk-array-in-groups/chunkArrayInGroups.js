function chunkArrayInGroups(arr, chunkLength) {
  const chunkedArray = [];
  let startChunkingIndex = 0;
  while (startChunkingIndex * chunkLength + chunkLength <= arr.length) {
    chunkedArray.push(arr.splice(startChunkingIndex * chunkLength, chunkLength));
    startChunkingIndex += 1;
  }
  if (startChunkingIndex * chunkLength + chunkLength + 1 < arr.length) {
    chunkedArray.push(arr.splice(startChunkingIndex * chunkLength));
  }
  return chunkedArray;
}

export {
  chunkArrayInGroups,
};
