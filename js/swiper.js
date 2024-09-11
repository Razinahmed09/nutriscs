
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    //   autoplay: {
    //   delay: 2000,
    // },  // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      // when window width is >= 640px
      767: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  });




