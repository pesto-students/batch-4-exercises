
function abbreviateString(arg) {
  if (typeof arg !== 'string') {
    throw new Error();
  }
  const splittedString = arg.split(' ');
  const firstName = splittedString[0];
  const lastName = splittedString[splittedString.length - 1];
  const lastNameInitial = lastName.split('')[0].toUpperCase();
  return `${firstName} ${lastNameInitial}.`;
}

export {
  abbreviateString,
};
