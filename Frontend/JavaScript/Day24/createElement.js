// createElement(): To create a new HTML element dynamically (paragraph, hiding,division...)
// appendChild:the new element created in existing parent
// createElement()===>style===>textcontent====>appendChild

// syntax: var identifieename=document.createElement("tag name")

var division=document.createElement("div")
document.body.appendchild(division)
division.style.width="500px"
division.style.height="500px"
division.style.backgroundColor="acqa"
division.textContent="Iam father"


var childdivision=document.createElement("div")
document.division.appendchild(childdivision)
childdivision.style.width="50%"
childdivision.style.height="50%"
childdivision.style.backgroundColor="darkblue"
childdivision.textContent="Iam your son"
