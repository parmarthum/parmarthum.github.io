var swiper = new Swiper(".top_slider", {
    
    // auto height
    // autoHeight: false,
    
    // loop
    loop:true,
   
    // grab cursore 
    // grabCursor: true,
    centeredSlides: true,

    // auto play
    autoplay: {
      delay: 4000,
      disableOnInteraction: true,
    },

    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },

    // responsive break points 
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 50,
      },
    },

  });
