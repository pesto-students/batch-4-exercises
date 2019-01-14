
class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }

  addDobDigits() {
    return this.dateOfBirth.split('/').join('').split('').reduce((sum, stringNumber) => sum + parseInt(stringNumber, 10), 0);
  }
}

export {
  Person,
};
