
function leastCommonMultiple(integer1, integer2) {
  if (integer1 === 0) {
    return 0;
  }
  if (integer2 === 0) {
    return 0;
  }
  let greater = Math.abs(integer1) > Math.abs(integer2) ? Math.abs(integer1) : Math.abs(integer2);
  // eslint-disable-next-line no-constant-condition
  while (true) {
    if ((greater % integer1 === 0) && (greater % integer2 === 0)) {
      return greater;
    }
    greater += 1;
  }
}

export {
  leastCommonMultiple,
};
