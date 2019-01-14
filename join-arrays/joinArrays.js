function joinArrays(...args) {
  return args.reduce((acc, itemAry) => [...acc, ...itemAry]);
}

export { joinArrays };
