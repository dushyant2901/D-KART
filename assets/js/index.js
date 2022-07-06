const modalOverlay = document.querySelector(".modal-overlay");
const modalCloseBtn = document.querySelector(".modal-close-btn");

modalCloseBtn.addEventListener("click", () => {
  modalOverlay.classList.remove("show-modal");
});
