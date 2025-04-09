if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (userFn) {
    const originalArr = this; //current object ki taraf point karta hai
    for (let i = 0; i < originalArr.length; i++) {
      userFn(originalArr[i], i);
    }
  };
}
const arr = [1, 3, 4, 45, 64, 3, 3, 2];

//Question by iterviewer
//Error .forEach function does not exist on arr variable
//Answer: Real Signature ko samjho

arr.myForEach(function (value, index) {
  console.log(`Value at Index ${index} is ${value}`);
});

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (userFn) {
    const result = [];
    const originalArr = this;

    for (let i = 0; i < originalArr.length; i++) {
      const value = userFn(originalArr[i], i);
      result.push(value);
    }
    return result;
  };
}

if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (userFn) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      if (userFn(this[i])) {
        result.push(this[i]);
      }
    }
    return result;
  };
}
