
function telephoneCheck(phoneNumber) {
  const regExp = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}/;
  const phone = phoneNumber.match(regExp);
  return phone;
}

export {
  telephoneCheck,
};
