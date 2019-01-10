function repeatStringNumTimes(...args) {
  var result = ""
  if (args[1] <= 0) {
    return result
  }
  for (let index = 0; index < args[1]; index++) {
    result = result.concat(args[0])
  }
  return result
}

export {
  repeatStringNumTimes,
};
