// calucate the total price of the product 

function product(product, quantity) {
    return product * quantity;
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

var Withderawl=((Amount,withdrawal)=>{
    return Amount - withdrawal;
})(10000, 5000 );

// Execute login validation immideatly without calling the function seperately.(iife)

var loginValidation=((user, password)=>{
    return user==="charn" && password==="charan@123"
})("charn", "charan@123");