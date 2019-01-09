
function largeOfFour(args) {
  const newArr = [];
  args.forEach((arr) => {
    let biggest = arr[0];
    for (let i = 1; i < arr.length; i += 1) {
      if (arr[i] > biggest) biggest = arr[i];
    }
    newArr.push(biggest);
  });
  return newArr;
}

export {
  largeOfFour,
};
