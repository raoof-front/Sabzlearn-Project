const swiper = new Swiper('.swiper-container', {
    
    speed: 1000,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    gragCursor: 'true',
    slidesPerView: 4,
   spaceBetween: 25, 
  
   loopFillGroupWithBlank: true,

   pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
   },
   

    breakpoints: {
      0: {
          slidesPerView: 1
      },
      700: {
          slidesPerView: 2
      },
      1080: {
          slidesPerView: 3
      },
       1320: {
          slidesPerView: 4
      }
  }
  });