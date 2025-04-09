class Person {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }
  getFullName() {
    return `${this.fname} ${this.lname}`;
  }
}

const p1 = new Person("Amresh", "Chaurasiya");
const p2 = new Person("Rahul", "Chaurasiya");

console.log(p1.getFullName());
console.log(p2.getFullName());
