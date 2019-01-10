
function SavingsAccount(accountNumber,email,firstName,lastName) {
  if(accountNumber.length != 6){
    throw 'Account Number must be a 6-digit number';
  }
  if(!/\w+@\w+\.com/.test(email)){
    throw 'Invalid e-mail';
  }
  if(firstName.length < 3 || firstName.length > 20){
    throw 'First name must be between 3 and 20 characters long';
  }
  if(!/^[a-zA-Z]+$/.test(lastName)){
    throw 'Last name must contain english alphabets only';
  }
  this._accountNumber = accountNumber,
  this._email = email,
  this._firstName = firstName,
  this._lastName = lastName,
  this.products = []
}

export {
  SavingsAccount,
};
