let age = prompt("Enter your age:")

if (age >= 65) {
    output = "Free Friday Coffee Night for Seniors!"
    document.getElementById("verify").style.color = "#8C3826";
    document.getElementById("verify").style.fontStyle = "italic";
    document.getElementById("verify").style.fontWeight = "bold"}
else {
    output = "Enjoy Music and Make Memories"}

document.getElementById("verify").innerHTML = output;
