const modalOverlay = document.querySelector(".modal-overlay");
const modalCloseBtn = document.querySelector(".modal-close-btn");
const toastCloseBtn = document.querySelector(".toast-close-btn");
const toast = document.querySelector(".notification-toast-container");

modalCloseBtn.addEventListener("click", () => {
  modalOverlay.classList.remove("show-modal");
});
toastCloseBtn.addEventListener("click", () => {
  toast.classList.add("stop-animation");
});
