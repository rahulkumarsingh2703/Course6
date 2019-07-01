var modal = document.querySelector(".trash-modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");


function toggleModal() {
    modal.classList.toggle("trash-show-modal");
}


function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}


$(".trigger").on("click", function (event) {
  toggleModal();
});


closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
