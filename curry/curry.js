function curry(callback) {
  const curried = (...args) => {
    if (callback(...args) && typeof callback(...args) !== 'string') {
      return callback(...args);
    }
    return (arg2) => {
      if (callback(...args, arg2) && typeof callback(...args, arg2) !== 'string') {
        return callback(...args, arg2);
      }
      return arg3 => callback(...args, arg2, arg3) || (arg4 => callback(...args, arg2, arg3, arg4));
    };
  };

  return curried;
}

export { curry };
