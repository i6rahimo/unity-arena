

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 4000,
    },
    speed: 2000,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });
  const stockSwiper = new Swiper('.stock-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slideClass: 'stock-swiper-slide',
    wrapperClass: 'stock-swiper-wrapper',
    pagination: {
      el: '.stock-swiper-pagination-up',
      type: 'progressbar',
    },
    // pagination: {
    //   el: '.stock-swiper-pagination',
    //   type: 'fraction',
    // },
  });
  
  const headerNav = document.querySelector('.header__nav'),
        headerBtn = document.querySelector('.header__close'),
        SpanUp = document.querySelector('.span-up'),
        SpanDown = document.querySelector('.span-down'),
        SpanMiddle = document.querySelector('.span-middle');

  headerBtn.addEventListener('click', (e)=> {
    headerNav.classList.toggle('show');
    SpanDown.classList.toggle('open')
    SpanUp.classList.toggle('open')
    SpanMiddle.classList.toggle('open')
  })