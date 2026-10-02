// no need to give semicolon ;

// this statements are not seen on screen the statements are 
// Right click → Inspect → Console
// Each console.log() produces a new line.
// it is used to communicate with console 
console.log("====================")
console.log("My profile")
console.log("====================")
console.log("Name: Sri Charan ")
console.log("Learning: JavaScript")
console.log("Goal: Become a Web Developer")
console.log("====================")

console.table([
                 {name:"charan",skills:"python"},
                 {name:"usha",skills:"python"},
                 {name:"kaif",skills:"python"},
                 {name:"loke",skills:"python"},

])


console.count("button clicked")
console.count("button clicked")
console.count("button clicked")
console.count("button clicked")

console.log("msg1")
console.log("msg2")
console.log("msg3")
console.log("msg4")
console.log("msg5")

// console.clear()

console.group("student1")

console.log("charan")
console.log("web developre")

console.groupEnd()

console.group("student3")

console.log("usha")
console.log("Govt Employee")

console.groupEnd()

console.group("student3")

console.log("kaif")
console.log("Doctor")

console.groupEnd()

console.log(window);

// window.alert("this is with the window object")         // This window alert showes when you open the window 
// alert("this is wothiut windows object")

// window.open("https://www.google.com");

window.setTimeout(function after3sec(){
    console.log("hello");
},3000)

console.log("10")
console.log(10)