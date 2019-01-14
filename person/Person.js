class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    return this;
  }

  addDobDigits() {
    const digits = this.dateOfBirth.replace('/', '').replace('/', '').split('')
    const sumOfDigits = digits.map(element => Number(element))
      .reduce((accumalator, digit) => accumalator + digit);
    return sumOfDigits
  }
}
export {
  Person,
};