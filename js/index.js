var modal = document.getElementById('createPostModal');
var btn = document.getElementById("createPost");
var spancreate = document.getElementById("closecreate");


btn.onclick = function() {
    modal.style.display = "block";
    modalContent.style.width = "80%";
}

spancreate.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
