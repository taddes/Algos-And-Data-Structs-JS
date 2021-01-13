class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  fullName() {
    return `Your name is ${this.firstName} ${this.lastName}`
  }
  static enrollStudents(...students)
}

let firstStudent = new Student('Taddes', 'Korris')
console.log(firstStudent.firstName)