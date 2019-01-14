
function bind(func, ...thisObjectAndArgs) {
  return func.bind(...thisObjectAndArgs);
}

export {
  bind,
};
