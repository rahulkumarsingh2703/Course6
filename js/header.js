var modalin = document.getElementById('signInModal');
var btnin = document.getElementById("signIn");
var spanin = document.getElementById("closein");
btnin.onclick = function() {
    modalin.style.display = "block";
}


spanin.onclick = function() {
    modalin.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modalin) {
        modalin.style.display = "none";
    }
} 


var modalup = document.getElementById('signUpModal');
var btnup = document.getElementById("signUp");
var spanup = document.getElementById("closeup");

btnup.onclick = function() {
    modalup.style.display = "block";
}

function openSignUpModal() {
    modalin.style.display = "none";
    modalup.style.display = "block";
}

spanup.onclick = function() {
    modalup.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modalup) {
        modalup.style.display = "none";
    }
} 


