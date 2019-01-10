function SavingsAccount(accountNumber, email, firstName, lastName) {
  if (accountNumber.length !== 6) {
    throw new Error('Account Number must be a 6-digit number');
  }
  if (!(firstName.length >= 3 && firstName.length <= 20)) {
    throw new Error('First name must be between 3 and 20 characters long');
  }
  if (lastName.split('').find(item => typeof item === 'number') !== undefined) {
    throw new Error('Last name must contain english alphabets only');
  }
  this.accountNumber = accountNumber;
  this.email = email;
  this.firstName = firstName;
  this.lastName = lastName;
  this.products = [];
}

export { SavingsAccount };
