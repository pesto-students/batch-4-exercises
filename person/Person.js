const isDigit = str => str.match(/^\d+$/);
const addDigits = (a, b) => parseInt(a, 10) + parseInt(b, 10);

class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }

  addDobDigits() {
    return this.dateOfBirth
      .split('')
      .filter(isDigit)
      .reduce(addDigits);
  }
}

export { Person };
