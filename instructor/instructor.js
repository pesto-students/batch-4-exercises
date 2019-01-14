
function instructor(...args) {
  return args;
}

instructor.sayHi = () => {
  instructor.firstName = 'Ram';
};

export {
  instructor,
};
