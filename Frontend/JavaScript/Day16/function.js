// IIFE: Immediately Invoked Function Expression

// basic IIFE structure:

(function() {
    // code here
    console.log("This is an IIFE");
})();

(()=>{
    // code here
    console.log("This is an arrow function IIFE");
})();

// IIFE with one parameter:
(function(name) {
    console.log("Hello, " + name);
})("charan");

(side=>{
    console.log(side*side)

})(3);

((l,b)=>{
    console.log("Area of rectangle: " + (l*b));
})(5, 10);

// IIFE with return type. we didn't get output directly but we need to store it in a variable to get the output:

let result = (function(a,b) {
    return a+b;
})(5, 10);
console.log(result); // Output: 15


let result1 = (function(a,b) {
    return a+b;
});
console.log(result1(result, 10)); // Output: 25
console.log("===================================================")
console.log("===================================================")
console.log("")

console.log("IIFE function using arrrow function");

((a,b) => {
    console.log(`Sum: ${a+b}`);
})(5, 10);
console.log("")
console.log("IIFE with one parameter using arrow function");
((name) => {
    console.log("good morning, " + name+"to day is 29-10-2024");
})("bro");
console.log("")

console.log("IIFE with multiple parameter using arrow function");
((l,b) => {
    console.log("Area of rectangle: " + (l*b));
})(5, 10);
console.log("")


console.log("IIFE function using arrow function with return type");
let result2 = ((a,b) => {
    return a+b;
})(20, 5);
console.log(result2); // Output: 25
console.log("")

// Named function
function namedFunction() {
    console.log("This is a named function");
}
namedFunction();

// annonymous function
let anonymousFunction = function() {
    console.log("This is an anonymous function");
}
anonymousFunction();

// console.log("Here we have to call the function after the function declaration to get the output otherwise we will get an error  because the function is not defined yet");

(()=> {
    console.log("This is using arrow function IIFE ");
}
)();
// this IIFE function automatically invoked after the function declaration and we will get the output without any error because the function is defined before the invocation.


// named function with return type
function namedFunctionWithReturn(a, b) {
    return a + b;
}
console.log(namedFunctionWithReturn(5, 10)); // Output: 15

// annonymous function with return type 
let anonymousFunctionWithReturn = function(a, b) {
    return a + b;
}
console.log(anonymousFunctionWithReturn(15, 10)); // Output: 25


function product(a, b) {
    return a * b;
}
console.log(product(2,20)); // Output: 40

// calucalting the student total marks using anonymous function
let sum = (s1, s2, s3, s4, s5)=>{
    return s1 + s2 + s3 + s4 + s5;
    };
let result4 = sum(150, 35, 89, 93, 76); // Output: Total marks: 85
console.log(result4); // Output: 443

console.log("Total marks: " + ((s1, s2, s3, s4, s5)=>{
    return s1 + s2 + s3 + s4 + s5;
})(150, 35, 89, 93, 76)); // Output: Total marks: 443


// clauculating the reminding bank balance after withdrawl(arrow)
// Execute login validation immideatly without calling the function seperately.(iife)