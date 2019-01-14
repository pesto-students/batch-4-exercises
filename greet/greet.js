function appendNameToGreet(name){
  return 'Hey ' + name;
}
function greet(greetingFor) {
  return new Promise(res => {
    res(appendNameToGreet(greetingFor));
  });
}

export {
  greet,
};
