const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slidesPerView: 4,
  speed: 1000,
  longSwipes: false,
  rewind: true,
  oneWayMovement:true,
  breakpoints: {
    175: {
      slidesPerView: 1,
      spaceBetween: 10,
    },

    375: {
      slidesPerView: 1,
      spaceBetween: 18,
    },

    768: {
      slidesPerView: 2.5,
      spaceBetween: 18,
    },

    1200: {
      slidesPerView: 4,
      spaceBetween: 18,
    },
  },
});

const reviewSwiper = new Swiper('.reviews-swiper', {
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  slidesPerView: 1,

  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 0,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 28,
    },
  },
});
