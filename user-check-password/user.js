
// (*)
// Follow the instructions and fill in the blank sections.
function User(name,password) {
  this.username = name
  this.password = password
  
  return {
    username: name,
    password: password,
  }

  function checkPassword(password) {
    if (this.password === password){
      return true
    }
  };

  // set a username and password property on the user object that is created
}

// create a method on User called `checkPassword`
// this method should take in a string and compare it to the object's password property
// return `true` if they match, otherwise return `false`

export {
  User,
};
