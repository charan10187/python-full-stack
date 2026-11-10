
let demo = ()=>{
    console.log("hi... iam charan");
};
demo()

// case 1
let msg1= ()=> console.log("single line executin");
msg1()

// case 2
let msg2= $ = ()=> console.log("single line executin using $");
msg2()
let msg3= _ = ()=> console.log("single line executin using _");
msg3()

// case 3
let msg4= (displayMessage)=> console.log(displayMessage);
msg4("this is a message")
msg4("this is another message")


// @implict 
let add=(a,b)=> a+b;
console.log(add(20,10));
// explicit
let sub=(a,b)=>{
    return a+b
}
console.log(sub(10,20))
function add1(a,b){
    return a+b
}
console.log(add1(22,33))


// HOF

let call=(a,b,operation)=>{operation(a,b)};

let add2=(a,b)=> console.log(a+b);
let sub2=(a,b)=> console.log(a-b);

call(100,20,add2);
call(100,20,sub2);