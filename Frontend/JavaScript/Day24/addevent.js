// addEvent Listner: It uses to attach an even handler to an enlement inthe DOM.
// It listens for specific event(such as click,keyup, etc...) on that element and execute a function when an event occurs.
// stntax: element.addEveneListner("event",function,usecaption);

var allinputs=document.querySelectorAll(inputs)

console.log(allinputs)

// annonomusfunction
allinputs[0]=addEventListener("click",function(){
    document.body.style.backgroundColor="red"
    Msg.innerText="this is yellow"
})

// arrow function
allinputs[1]=addEventListener("dblclick",()=>{
    document.body.style.backgroundColor="green"
    Msg.innerText="this is yellow"
})

allinputs[2]=addEventListener("mouseover",()=>{
    document.body.style.backgroundImage="../Day23/11.jpg"
    // Msg.innerText="this is yellow"
})

allinputs[2]=addEventListener("mouseout",()=>{
    document.body.style.backgroundImage="../Day23/10.jpg"
    // Msg.innerText="this is yellow"
})

allinputs[3]=addEventListener("keydown",()=>{
    document.body.style.backgroundColor="hotpink"
    Msg.innerText="this is yellow"
})
allinputs[3]=addEventListener("keyup",()=>{
    document.body.style.backgroundColor="yellow"
    Msg.innerText="this is yellow"
})