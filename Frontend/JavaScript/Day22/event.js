function showpassword(){
    document.querySelector("input").type="text"
    document.querySelector("#eye").src=`./eye-solid-full.svg`
}
function hidepassword(){
    document.querySelector("input").type="password"
    document.querySelector("#eye").src=`eye-solid-full.svg`
}