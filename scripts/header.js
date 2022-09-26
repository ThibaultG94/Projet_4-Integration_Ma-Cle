let navHeader = document.querySelector(".header");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  if (window.scrollY > 10 && window.scrollY > lastScroll) {
    navHeader.style.transform = "translateY(-120px)";
  }

  if (window.scrollY < 120 && window.scrollY < lastScroll) {
    navHeader.style.transform = "translateY(0)";
  }

  lastScroll = window.scrollY;
});
