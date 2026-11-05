
var num=0


function inc(){
    num++;
    if(num>0 && num<=10){
        document.getElementById("result").value=num
    }
}

function dec(){
    num--;
    if(num>0 && num<=10){
        document.getElementById("result").value=num
    }
}

