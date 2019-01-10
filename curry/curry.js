function curry(callback) {
  return () => {
    callback();
  };
}

export { curry };
