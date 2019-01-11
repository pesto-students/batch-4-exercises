function lowercaseKeys(obj) {
  return Object.keys(obj).reduce((ac, cu) => ({ ...ac, [cu.toLowerCase()]: obj[cu] }), {});
}

export { lowercaseKeys };
