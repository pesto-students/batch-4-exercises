
function squareNumbersArray(...arr) {
  arr.map((el) => {
    if(typeof el != 'number'){
      throw 'My custom error';
    }
  })
}

export {
  squareNumbersArray,
};
