const modalOverlay = document.querySelector(".modal-overlay");
const modalCloseBtn = document.querySelector(".modal-close-btn");
const toastCloseBtn = document.querySelector(".toast-close-btn");
const toast = document.querySelector(".notification-toast-container");
const accordionMenuBtns = document.querySelectorAll(".accordion-menu");
const submenuCategoryList = document.querySelectorAll(".submenu-category-list");
const sidebar = document.querySelector(".sidebar");
const sidebarCloseBtn = document.querySelector(".sidebar-close-btn");
const mobileMenuOpenBtn = document.querySelector("#mobile-menu-open-btn");
console.log(mobileMenuOpenBtn);
modalCloseBtn.addEventListener("click", () => {
  modalOverlay.classList.remove("show-modal");
});
toastCloseBtn.addEventListener("click", () => {
  toast.classList.add("stop-animation");
});

accordionMenuBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    submenuCategoryList.forEach((elem) => {
      if (elem === btn.nextElementSibling) {
        return;
      }
      elem.classList.remove("show-submenu");
    });
    btn.nextElementSibling.classList.toggle("show-submenu");
  });
});
mobileMenuOpenBtn.addEventListener("click", () => {
  sidebar.classList.add("sidebar-open");
});
sidebarCloseBtn.addEventListener("click", () => {
  sidebar.classList.remove("sidebar-open");
});
