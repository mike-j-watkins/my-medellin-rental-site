const myVw = Math.max(document.documentElement.clientWidth);
const navButton = document.querySelector(".navigation__button");
const navList = document.querySelector(".navigation__list");
const navLinks = document.querySelectorAll(".navigation__link");
const nav = document.querySelector(".navigation");
const logo = document.querySelector(".navigation__logo");
const logoSmall = document.querySelector(".logo-small");

//SWIPER FUNCTIONALITY. slidesperview checks width > 900 then sets visible slides to 3 or 1
const swiper = new Swiper(".swiper-container", {
  spaceBetween: 30,
  slidesPerView: myVw > 900 ? 3 : 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const menuChanger = function () {
  navList.classList.toggle("hidden");
  nav.classList.toggle("active");
  logo.classList.toggle("hidden");
};

if (myVw >= 1200) {
  navList.classList.remove("hidden");
  navButton.classList.add("hidden");
} else {
  navList.classList.add("hidden");
  navButton.classList.remove("hidden");
  logo.classList.add("hidden");
  logoSmall.classList.remove("hidden");
  navLinks.forEach((element) => element.addEventListener("click", menuChanger));
}

navButton.addEventListener("click", menuChanger);
