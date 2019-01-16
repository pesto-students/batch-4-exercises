
function slice(start, end, object) {
  const normalizeIndex = (index, target) => {
    if (index > target.length) {
      return target.length;
    }
    if (index < 0) {
      return Math.abs(index) > target.length ? 0 : target.length + Number(index);
    }
    return Number(index);
  };
  return object.slice(normalizeIndex(start, object), normalizeIndex(end, object));
}

export {
  slice,
};
