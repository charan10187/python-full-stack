// variable declaration 

// to access the object values we can use dot notation or Box notation

let details = {
    name: "John",
    age: 30,
    city: "New York"
};

console.log(details.name); // Output: John  
console.log(details.age);  // Output: 30
console.log(details.city); // Output: New York


let details2 = {
    name: "Alice",
    age: 25,
    city: "Los Angeles"
};
console.log(details2);
console.log(details2.name); // Output: Alice
console.log(details2.age);  // Output: 25
console.log(details2.city); // Output: Los Angeles

// Array([]):
// It is used t store the multiple data in a single variable. 
// variable declaration variableName = [value1, value2, value3, ...];

let fruits = ["Apple", "Banana", "Orange", "Mango"];
console.log(fruits);
console.log(fruits[0]); // Output: Apple
console.log(fruits[1]); // Output: Banana
console.log(fruits[2]); // Output: Orange
console.log(fruits[3]); // Output: Mango

// MAP: It is used to store the multiple data in a single variable.
// variable declaration variableName = new Map();   
// it is used to iterate over an array and return an new array

// syntax: arr_name.map(initialValue, index, arr)=>{//code to be executed for each element in the array}

let name_length = fruits.map((value) => {return value.length});
console.log(name_length); // Output: [5, 6, 6, 5]






