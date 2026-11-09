
// set Atttribute(): to add a new attribute or change the value of an existin attribute of an HTML Element

// Syntax: Element.setAttribute(attribute,value)
document.querySelector("input").setAttribute("type", "password");
let input = document.querySelector("input");

input.setAttribute("type", "password");

console.log(input.getAttribute("type"));

// remove Attribute(): it is used to remove an existing attribute from an element
// syntax: element.removeAttribute(attributename)

document.querySelector("#in").removeAttribute("type","disable")

// if user enter both inputs same then the submit button should be enabled
var p1=document.querySelector("input").setAttribute("type","password")
var p2=document.querySelector("input").setAttribute("type","password")
var sub=document.querySelector("#sub").removeAttribute("type","disable")
if(p1==p2){
    document.querySelector("#sub").setAttribute("type","submit")
}

var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var sub = document.querySelector("#sub");

function checkPassword() {
    if (p1.value !== "" && p1.value === p2.value) {
        sub.disabled = false;
    } else {
        sub.disabled = true;
    }
}

p1.addEventListener("input", checkPassword);
p2.addEventListener("input", checkPassword);



