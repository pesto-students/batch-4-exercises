function truthCheck(users) {
  const [firstUser, ...restOfUsers] = users;

  if (Object.keys(firstUser).every(key => Boolean(firstUser[key]))) {
    const restUserKeys = Object.keys(firstUser);
    return restOfUsers.every(user => restUserKeys.every(key => Boolean(user[key])));
  }
  return false;
}

export { truthCheck };
