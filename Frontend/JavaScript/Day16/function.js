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
