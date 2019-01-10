function objectInvert(obj) {
  return Object.entries(obj).reduce((acc, [key, value]) => ({ ...acc, [value]: key }), {});
}

export { objectInvert };
