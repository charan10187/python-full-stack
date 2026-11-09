// var division=document.createElement("div")
//     console.log("division")
//     body.appendChild(division)

var form=document.createElement("form")
    console.log(form)
    // division.appendChild("div")

var tab=document.createElement("table")
    form.appendChild(tab);
    tab.style.border="2px solid"
    tab.style.borderCollapse="collapse"

var row=[]
var th=[]

for(i=0;i<=4;i++){
    row[i]=document.createElement("tr")
    tab.appendChild(row[i])

    if(i==1 || i==2){
        for(j=0;j<=2;j++){
        th[j]=document.createElement("th")
        row[i]=appendChild(th[j])
    }
    }

    else{
        var th1=document.createElement("th")
        row[i].appendChild(th1)
        th1.colSpan=2
        th1.style.border="2px solid"

}
}
var allForms=document.forms
var allTab=document.getElementById("th")
console.log(allTab);
allTab[0].innerHTML="login Form"
allTab[1].innerHTML="email"
allTab[3].innerHTML="password"
var inp=[]
for(i=0;i<=2;i++){
    inp[i]=document.createElement("input")
}

allTab[2].appendChild(ino[0])
allTab[4].appendChild(ino[1])
allTab[6].appendChild(ino[2])

inp[0].type="email"
inp[0].placeholder="enter email"
inp[1].type="password"
inp[1].placeholder="enter password"
inp[2].type="button"
inp[2].value="sunmit"

inp[2].addEventListener("click",()=>{
    var userEmail=inp[0].value;
    var userEmail=inp[1].value;
    if(userEmail=="charn10187@gmail.com" && password=="qwert"){
        inp[2].type="submit"
        allForms[0].action="https://www.instagram.com/charan2.o"
    }
    else{
        allTab[5].innerHTML="invalid userEmail or password"
        allTab[5].style.color="red"
    }
})