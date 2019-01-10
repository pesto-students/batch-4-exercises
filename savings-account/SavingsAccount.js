function SavingsAccount(accNum, email, fname, lname) {
  if (accNum.length !== 6) {
    throw new Error('Account Number must be a 6-digit number');
  }

  if (!email.match(/\w+@\w+\.com/)) {
    throw new Error('Invalid e-mail');
  }

  if (fname.length < 3 || fname.length > 20) {
    throw new Error('First name must be between 3 and 20 characters long');
  }

  if (lname.match(/[^A-Za-z]/)) {
    throw new Error('Last name must contain english alphabets only');
  }

  this._accountNumber = accNum;
  this._email = email;
  this._firstName = fname;
  this._lastName = lname;
  this.products = [];
}

export { SavingsAccount };
