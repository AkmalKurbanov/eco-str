$(document).ready(function () {
  var swiper = new Swiper(".hero-js", {
    speed: 800,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
});