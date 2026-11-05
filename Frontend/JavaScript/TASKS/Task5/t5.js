// < 5        -> Weak (red)
// >= 5, < 8  -> Average (blue)
// >= 8, <= 12 -> Strong (green)


function psw() {
    const text = document.getElementById("Color").value;
    const length = text.length;
    const msg = document.getElementById("msg");

    if (length <3) {
        msg.style.color = "darkgray";
        msg.textContent = "Too week 😂🤣";
    } else if (length <5) {
        msg.style.color = "red";
        msg.textContent = "Weak password 😥";
    } else if (length <=8) {
        msg.style.color = "blue";
        msg.textContent = "Average password 🥺";
    } else if (length <= 12) {
        msg.style.color = "green";
        msg.textContent = "Strong password 😎";
    } else {
        msg.style.color = "";
        msg.textContent = "Too long (max 12 characters)";
    }

}