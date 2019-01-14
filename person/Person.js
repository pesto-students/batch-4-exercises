class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }

  addDobDigits() {
    return this.dateOfBirth
      .replace(/[/]/g, '')
      .split('')
      .reduce((acc, val) => Number(acc) + Number(val));
  }
}

export { Person };
