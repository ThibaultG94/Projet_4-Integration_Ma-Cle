let navHeader = document.querySelector(".header");
let lastScroll = 0;
const shadowHeader = document.querySelector(".shadow-header");

const toggleMenu = document.querySelector(".header-nav_toggle-menu");

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
  console.log("test");
});
