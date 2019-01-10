function chunkArrayInGroups(arr, len) {
  return arr.reduce((ac, cu) => {
    if (!ac.length || ac[ac.length - 1].length === len) {
      ac.push([cu]);
    } else {
      ac[ac.length - 1].push(cu);
    }
    return ac;
  }, []);
}

export { chunkArrayInGroups };
