let navHeader = document.querySelector(".header");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  if (window.scrollY < lastScroll) {
    navHeader.style.transform = "translateY(-200px)";
  } else if (window.scrollY > lastScroll) {
    navHeader.style.transform = "translateY(0)";
  }
  lastScroll = window.scrollY;
});
