function createStudent(likes) {
  if (!likes) {
    return 'The student likes JavaScript and ES2015';
  }
  const { likesJavaScript, likesES2015 } = likes;

  if (likesJavaScript === false && likesES2015 === false) {
    return 'The student does not like much...';
  }

  if (likesJavaScript === false) {
    return 'The student likes ES2015!';
  }

  return 'The student likes JavaScript!';
}

export { createStudent };
