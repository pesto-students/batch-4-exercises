function sqrt(arg) {
  return Math.sqrt(arg);
}
function round(arg) {
  return Math.round(arg);
}
function power(...args) {
  // fuck you eslint
  // eslint-disable-next-line no-restricted-properties
  return Math.pow(...args);
}
export { sqrt, power, round };
