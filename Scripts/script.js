function navResponse() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function check_empty() {
if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
alert("Fill All Fields !");
} else {
document.getElementById('form').submit();
alert("Form Submitted Successfully...");
}
}
//Function To Display Popup
function div_show() {
document.getElementById('popupContact').style.display = "block";
document.getElementById("background").style.opacity = "0.1";
}
//Function to Hide Popup
function div_hide(){
document.getElementById('popupContact').style.display = "none";
document.getElementById("background").style.opacity = "1";
}