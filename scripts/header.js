let navHeader = document.querySelector(".header");
let lastScroll = 0;
const shadowHeader = document.querySelector(".shadow-header");

const toggleMenu = document.querySelector(".header-wrapper_toggle-menu");
const navMenu = document.querySelector(".navbar");
const darkWindow = document.querySelector(".dark-window");
const homeItem = document.querySelector(
  ".navbar_container-navbar_item--home-link"
);
const toggleIcon = document.querySelector(
  ".header-wrapper_toggle-menu-content_lines"
);
const firstItem = document.querySelector(".first-item");
const secondtItem = document.querySelector(".second-item");
const thirdItem = document.querySelector(".third-item");
const fourthItem = document.querySelector(".fourth-item");
const fifthItem = document.querySelector(".fifth-item");
const sixthItem = document.querySelector(".sixth-item");
let toggleClicked = false;

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

// FUNCTION ADD
function addProperties() {
  document.body.style.overflow = "hidden";
  darkWindow.style.transition = "opacity 0.6s ease, height 0.6s ease";
  darkWindow.classList.add("clicked-opacity");
  darkWindow.classList.add("clicked-height");
  navMenu.classList.add("clicked-opacity");
  homeItem.classList.add("clicked-translateX");
  firstItem.classList.add("clicked-translateX");
  document.querySelector(".first-trick").classList.add("clicked-translateX");
  secondtItem.classList.add("clicked-translateX");
  document.querySelector(".second-trick").classList.add("clicked-translateX");
  thirdItem.classList.add("clicked-translateX");
  document.querySelector(".third-trick").classList.add("clicked-translateX");
  fourthItem.classList.add("clicked-translateX");
  fifthItem.classList.add("clicked-translateX");
  document.querySelector(".fifth-trick").classList.add("clicked-translateX");
  // sixthItem.classList.add("clicked-translateX");
  toggleIcon.classList.add("active");
}

function addTransition() {
  let index = 20;
  document.querySelectorAll(".trick").forEach((button) => {
    button.style.transition = `transform 0.2s ease-in-out 0.${index}s, opacity 0.2s linear 0.${index}s`;
    index = index + 5;
  });
}

// FUNCTION REMOVE
function removeProperties() {
  document.body.style.overflow = "visible";
  darkWindow.classList.remove("clicked-opacity");
  darkWindow.classList.remove("clicked-height");
  navMenu.classList.remove("clicked-opacity");
  homeItem.classList.remove("clicked-translateX");
  firstItem.classList.remove("clicked-translateX");
  document.querySelector(".first-trick").classList.remove("clicked-translateX");
  secondtItem.classList.remove("clicked-translateX");
  document
    .querySelector(".second-trick")
    .classList.remove("clicked-translateX");
  thirdItem.classList.remove("clicked-translateX");
  document.querySelector(".third-trick").classList.remove("clicked-translateX");
  fourthItem.classList.remove("clicked-translateX");
  fifthItem.classList.remove("clicked-translateX");
  document.querySelector(".fifth-trick").classList.remove("clicked-translateX");
  // sixthItem.classList.remove("clicked-translateX");
  toggleIcon.classList.remove("active");
}

function removeTransition() {
  document.querySelectorAll(".trick").forEach((button) => {
    button.style.transition = "none";
  });
}

// ADD EVENT LISTENER

toggleMenu.addEventListener("click", () => {
  if (toggleClicked === false) {
    addProperties();
    addTransition();
    toggleClicked = true;
  } else if (toggleClicked === true) {
    removeProperties();
    removeTransition();
    toggleClicked = false;
  } else {
    alert("SITE CASSE :(");
  }
});

document.querySelectorAll(".trick > svg").forEach((svg) => {
  svg.addEventListener("click", (e) => {
    document.querySelectorAll(`.${e.target.id}`).forEach((li) => {
      li.classList.toggle("li-active");
    });
    svg.classList.toggle("arrow-active");
    // svg.style.transform = "rotate(90deg)";
  });
});

// MEDIA QUERIES

window.addEventListener("resize", (e) => {
  if (e.target.outerWidth > 1024) {
    darkWindow.style.transition = "none";
    removeProperties();
    removeTransition();
  } else if (e.target.outerWidth <= 1024) {
    if (toggleClicked === true) {
      addProperties();
      addTransition();
    }
  }
});

darkWindow.classList.add("clicked-opacity");
