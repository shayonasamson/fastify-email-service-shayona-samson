const runSpeedTestButton = document.querySelector("#run-speed-test");
const dialogBox = document.querySelector("#dialog-box");
const closeButton = document.querySelector("#close-button");

runSpeedTestButton.addEventListener("click", openDialog);

closeButton.addEventListener("click", closeDialog);

function openDialog(e) {
    dialogBox.showModal();
}

function closeDialog(e) {
    dialogBox.close();
}

dialogBox.addEventListener("click", onClickOutsideDialog);

function onClickOutsideDialog(e) {
    const dialogDimensions = dialogBox.getBoundingClientRect();
    if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom) {
        e.currentTarget.close();
    }
}