const overlay = document.querySelector(".newsletter-overlay");
const closeBtn = document.querySelector(".newsletter-close-btn");
const dropdownPanel = document.querySelector(".dropdown-panel");
const dropdown = document.querySelector("#dropdown");
const menu = document.querySelectorAll(".category");
const dropdownList = document.querySelectorAll(".dropdown-list");
console.log(dropdownPanel, dropdown, menu, dropdownList);
window.addEventListener("DOMContentLoaded", () => {
  overlay.classList.add("show-overlay");
});

closeBtn.addEventListener("click", () => {
  overlay.classList.remove("show-overlay");
});

menu.forEach((elem) => {
  elem.addEventListener("mouseenter", () => {
    // menu.forEach((elem) => {
    //   elem.nextElementSibling?.classList.add("hide");
    // });
    elem.nextElementSibling.classList.add(["show"]);
    console.log(elem.nextElementSibling);
  });
});
menu.forEach((elem) => {
  elem.addEventListener("mouseleave", () => {
    console.log("first");
    elem.nextElementSibling.classList.remove("show");
  });
});

dropdown.addEventListener("mouseenter", () => {
  console.log("ddd");
  dropdown.nextElementSibling.classList.add(["show"]);
});
dropdown.addEventListener("mouseleave", (e) => {
  console.log(e.target.classList);
  if (e.target.classList.contains("dropdown-list")) {
    console.log("kkk");
    return;
  } else {
    dropdown.nextElementSibling.classList.remove(["show"]);
  }
});
