let navHeader = document.querySelector(".header");
let lastScroll = 0;
const shadowHeader = document.querySelector(".shadow-header");

const toggleMenu = document.querySelector(".header-nav_toggle-menu");
const navMenu = document.querySelector(".header-nav_toggle-menu_ul");
const darkWindow = document.querySelector(".dark-window");
const homeItem = document.querySelector(
  ".header-nav_container-list_item--home-link"
);
const firstItem = document.querySelector(".first-item");
const secondtItem = document.querySelector(".second-item");
const thirdItem = document.querySelector(".third-item");
const fourthItem = document.querySelector(".fourth-item");
const fifthItem = document.querySelector(".fifth-item");
const sixthItem = document.querySelector(".sixth-item");

//--------------
// NAVBAR SCROLL
//--------------

window.addEventListener("scroll", () => {
  if (window.scrollY > 10 && window.scrollY > lastScroll) {
    navHeader.style.transform = "translateY(-100%)";
    navHeader.classList.add("shadow-header");
  }

  if (window.scrollY < 120 && window.scrollY < lastScroll) {
    navHeader.classList.remove("shadow-header");
    navHeader.style.transform = "translateY(0)";
  }

  lastScroll = window.scrollY;
});

//------------
// TOGGLE MENU
//------------

toggleMenu.addEventListener("click", () => {
  darkWindow.classList.toggle("clicked-opacity");
  darkWindow.classList.toggle("clicked-height");
  navMenu.classList.toggle("clicked-opacity");
  homeItem.classList.toggle("clicked-translateX");
  firstItem.classList.toggle("clicked-translateX");
  secondtItem.classList.toggle("clicked-translateX");
  thirdItem.classList.toggle("clicked-translateX");
  fourthItem.classList.toggle("clicked-translateX");
  fifthItem.classList.toggle("clicked-translateX");
  sixthItem.classList.toggle("clicked-translateX");
});
