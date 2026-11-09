function loading(){
    var bgColors=document.querySelector("select").value
    document.body.style.backgroundColor=bgColors;
    document.getElementById("result").innerHTML=(`I Like ${bgColors} color`)
}

function original(){
    document.body.style.backgroundColor="back"
}