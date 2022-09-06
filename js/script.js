const navBar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  positionwindow = window.scrollY > 100;
  {
    navBar.classList.toggle("scroll-active", positionwindow);
    sideBar.classList.remove("menu-active");
  }
});

const menuBar = document.querySelector(".ri-menu-line");
const sideBar = document.querySelector(".navigation");
const closeBar = document.querySelector(".ri-close-line");

menuBar.addEventListener("click", () => {
  sideBar.classList.toggle("menu-active");
});
closeBar.addEventListener("click", () => {
  sideBar.classList.remove("menu-active");
});

// swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

// aos

