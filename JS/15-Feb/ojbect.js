const obj1 = {
  fname: "Amresh",
  lname: "Chaurasiya",
  getFullName: function () {
    return `${this.fname} ${this.lname}`;
  },
};

const obj2 = {
  fname: "Rahul",
  lname: "Chaurasiya",
};

obj2.__proto__ = obj1;

console.log(obj1.getFullName());
console.log(obj2.getFullName());
console.log(obj2);

// DRY --> Do not Repeat Yourself
