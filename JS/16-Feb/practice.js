Function.prototype.describe = function () {
  console.log(`Function name is ${this.name}`);
};

function greet(name) {
  return `Hello ${name}`;
}

greet.describe(); //Output    Function name is greet

//Function Declaration
function add(a, b) {
  return a + b;
}

//Function Expression
const sub = function (a, b) {
  return a - b;
};

//Arrow Function
const multiply = (a, b) => a * b;

//First Class Function
function applyOperation(x, y, operation) {
  return operation(x, y);
}

const result = applyOperation(5, 4, (a, b) => a / b);

function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter);
//When a function return a function it also attach all variable along with them declare inside the function. It's Closure. Child can Access Parents Resources

function onef() {
  let myName = "Amresh";
}

// console.log(myName); //Out of Scope

//IIFE --> Imediate Invoked Function Expression
(function () {
  console.log("Amresh");
})();
