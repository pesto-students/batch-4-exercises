
function binaryAgent(str) {
  let msg = '';
  str.split(' ').forEach((binaryNum) => {
    msg += parseInt(binaryNum, 2).toString(10);
  });
  return msg;
}

export {
  binaryAgent,
};
