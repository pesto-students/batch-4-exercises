
class Person {
  constructor(firstName, lastName, dateOfBirth){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }
  addDobDigits(){
    return this.dateOfBirth.split('/').join('').split('').map(el => parseInt(el)).reduce((acc,el) => acc + el, 0);
  }
}

export {
  Person,
};
