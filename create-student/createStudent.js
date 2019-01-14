
function createStudent(studentProperties) {
  if (studentProperties === undefined) {
    return 'The student likes JavaScript and ES2015';
  }
  if (studentProperties.likesES2015 === false && studentProperties.likesJavaScript === false) {
    return 'The student does not like much...';
  }
  if (studentProperties.likesES2015 === false) {
    return 'The student likes JavaScript!';
  }
  if (studentProperties.likesJavaScript === false) {
    return 'The student likes ES2015!';
  }
  return 'The student likes JavaScript and ES2015';
}

export {
  createStudent,
};
