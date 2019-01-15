
function isIterable(object) {
  if (typeof object[Symbol.iterator] === 'function') {
    return true;
  }else{
    return false;
  }
}

export {
  isIterable,
};
