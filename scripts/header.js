let navHeader = document.querySelector(".header");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  if (window.scrollY > 50 && window.scrollY > lastScroll) {
    navHeader.style.transform = "translateY(-200px)";
  }

  if (window.scrollY < 120 && window.scrollY < lastScroll) {
    navHeader.style.transform = "translateY(0)";
  }

  lastScroll = window.scrollY;
});
