
function savingsAccount(accountDetails) {
  if (accountDetails['_accountNumber.length'] < 6) {
    throw new Error('Account Number must be a 6-digit number');
  }

  const emailExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const regex = new RegExp(emailExp);
  if (!accountDetails['_email'].match(regex)) {
    throw new Error('Invalid e-mail');
  }

  const firstNameLength = accountDetails['_firstName'].length;
  if (!(firstNameLength > 3 && firstNameLength < 20)) {
    throw new Error('First name must be between 3 and 20 characters long');
  }

  accountDetails['_lastname'].split('').forEach((character) => {
    if (typeof character !== 'string') {
      throw new Error('Last name must contain english alphabets only');
    }
  });
  return accountDetails;
}

export {
  savingsAccount,
};
