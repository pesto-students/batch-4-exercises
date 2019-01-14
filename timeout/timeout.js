
function timeout(name) {
  const resolvedGreeting = 'Hello ' + name;
  return Promise.resolve(resolvedGreeting);
}

export {
  timeout,
};
