
function bind(callback, context, ...args) {
  return callback.bind(context, ...args);
}

export {
  bind,
};
