//Create an object representing a type of tea with properties for name, type and caffeine content.

const teas = {
  name: "Lemon tea",
  type: "Green",
  caffine: "Low",
};

//Access and print the name and type propertiesof the tea object
console.log(teas.name);
console.log(teas["type"]);

// Add a new property origin to the tea object
teas.origin = "China";

//Change the caffeine level of the tea object to 'medium
teas.caffine = "Medium";

//remove the type property from the tea object
delete teas.type;

// Check if the tea object has property origin
console.log("orgin" in teas);

// /use a for...in loop to print all properties of the tea object.
for (const key in teas) {
  console.log(key + ": " + teas[key]);
}

// Create a nested object representing different types of teas and their properties
const myTeas = {
  greentea: {
    name: "Green Tea",
  },
  blackTea: {
    name: "Black Tea",
  },
};

// Create a copy of the tea object.
const teaCopy = { ...teas }; //shallow Copy
const anotherCopy = teas; //refrence

//Add a custom method describe to the tea object that returns a description string.

//Merge two objects representing different teas into one
