var swiper = new Swiper(".mySwiper", {
       loop: true,
       speed: 1000,
       centeredSlides: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      //  autoplay: {
      //   delay: 1000,
      //   disableOnInteraction: false,
      // },
        breakpoints: {
         1080: {
          slidesPerView: 4,
          spaceBetween: 10
            },
          920: {
          slidesPerView: 3,
          spaceBetween: 20
            },
          520: {
          slidesPerView: 2,
          spaceBetween: 30
            },
          360: {
            slidesPerView: 1,
            spaceBetween: 40
           }
      }
    }); 