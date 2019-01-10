
function bouncer(...args) {
  return args[0].filter(a => !!a)
}

export {
  bouncer,
};
