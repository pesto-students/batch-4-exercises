function isTriangle(...args) {
  if ((args[0]+args[1]) <= args[2]) {
    return false
  }
  if ((args[0]+ args[2]) <=args[1]) {
    return false
  }
  if ((args[1] + args[2]) <= args[0]) {
    return false
  }
  return true
}

export {
  isTriangle,
};