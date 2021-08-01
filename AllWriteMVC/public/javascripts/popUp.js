function showModal(elementID) {
    var element = document.getElementById(elementID);
    element.classList.add("show-modal");
}

function closeModal(elementID) {
    var element = document.getElementById(elementID);
    element.classList.remove("show-modal");
}