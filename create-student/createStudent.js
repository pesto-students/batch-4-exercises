const not = booleanValue => !booleanValue;
function createStudent(studentLikes) {
  if (not(studentLikes)) {
    return 'The student likes JavaScript and ES2015';
  }
  if ((typeof studentLikes.likesES2015 === 'boolean') && studentLikes.likesES2015 === false && studentLikes.likesJavaScript === undefined) {
    return 'The student likes JavaScript!';
  }
  if ((typeof studentLikes.likesJavaScript === 'boolean') && studentLikes.likesJavaScript === false && studentLikes.likesES2015 === undefined) {
    return 'The student likes ES2015!';
  }
  if ((studentLikes.likesJavaScript === false) && (studentLikes.likesES2015 === false)) {
    return 'The student does not like much...';
  }
  return 0;
}

export {
  createStudent,
};
