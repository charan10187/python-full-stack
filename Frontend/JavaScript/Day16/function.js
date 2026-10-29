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