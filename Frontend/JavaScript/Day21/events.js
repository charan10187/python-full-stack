// JS events: These are the actions or ocuurances that happen in the browser,
// JS can detect these actions and execute a function in responce  -- such as clicking a button, a page finished loading or submitted a page.

// common types
// 1. mouse events (click,dblclick,mousehover,mouseout, mousemove)
// 2. kekboard events (keyup(relesing key), key down(pressing key))
// 3. form events (submit,focus,change,blur)
// 4. windo

// Inline event
function fun(){
    document.getElementById("result").innerHTML="welcome charan"
    document.body.style.backgroundColor="lightblue"
}

function fun1(){
    alert("Did u miss me CHARAN 😍")
}


// method 2: Using DOM Event properties(dom method +events)
// let button=Docment.getElementById("popup")
document.getElementById("popup").onclick=function(){
    alert("trying to find an error")
}
//addeventlistener(): this is commonli perfereed approach in JS 
// Definition: it is method used to attach an event handler toan HTML Element
// syntax: element.addEventListner("event", function)
let button=document.getElementById("popup")
button.addEventListener("click",function(){
    alert("iam a listner")
})

