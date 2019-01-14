
class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dob;
  }

  addDobDigits() {
    this.dateOfBirth = 30;
    return this.dateOfBirth;
  }
}

export {
  Person,
};
