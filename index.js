const menu = document.querySelector(".menu");
const navContainer = document.querySelector(".nav-container");
const close = document.querySelector(".close-btn");
const arrows = document.querySelectorAll(".arrow");
const navItem = document.querySelectorAll(".nav-item");

const toggleHide = () => {
  navContainer.classList.toggle("hide");
};
menu.addEventListener("click", () => {
  toggleHide();
});
close.addEventListener("click", () => {
  toggleHide();
});

arrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    if (arrow.classList.contains("arrow-feature")) {
      navItem.forEach((item) => {
        if (item.classList.contains("features")) item.classList.toggle("hide");
      });
    } else if (arrow.classList.contains("arrow-company")) {
      navItem.forEach((item) => {
        if (item.classList.contains("company")) item.classList.toggle("hide");
      });
    }
  });
});
