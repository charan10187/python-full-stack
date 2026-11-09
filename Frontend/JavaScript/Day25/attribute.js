
// set Atttribute(): to add a new attribute or change the value of an existin attribute of an HTML Element

// Syntax: Element.setAttribute(attribute,value)
document.querySelector("input").setAttribute("type", "password");
let input = document.querySelector("input");

input.setAttribute("type", "password");

console.log(input.getAttribute("type"));
