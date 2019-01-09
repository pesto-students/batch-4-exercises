
function limitFunctionCallCount(func, limit) {
  var counter = 0;
  return (...args) => {
    if(counter == limit){
      return null;
    }
    counter = counter + 1;

    return func(...args);
  }
}

export {
  limitFunctionCallCount,
};
