
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js';

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  // slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,	
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

// function checkSlide() {
//   const slideee = document.querySelector('.swiper-slide-active');
//   const slide = document.querySelector('.swiper-slide')
//   if(slide.classList.contains(slideee)) {
//     let video = document.querySelector(".video");
//     video.play(); 
//     console.log('w');
//   } else {

//     console.log('no');
//   }
// }
swiper.on('slideChange', function () {
  // console.log('slide changed'); 
  // console.log(video);
  let videoWrapper = document.querySelectorAll(".video");
  // console.log(videoWrapper);
  videoWrapper.forEach(e => {
    if(e.play) {
      // e.paused;
      // e.currentTime = 0;
      e.pause();
      e.currentTime = 0;
      e.load();
      // e.load;
      // console.log('qwe');
    }else {
      // e.paused;
      // e.c;
      e.currentTime = 0;
      console.log('no');
    }
  })

    // video.paused;
  
  // video.currentTime = 0;
  // video.autoplay.start();
});
 const stockSwiper = new Swiper('.stock-swiper', {
    // Optional parameters
    direction: 'horizontal',
    // loop: true,
    slideClass: 'stock-swiper-slide',
    wrapperClass: 'stock-swiper-wrapper',
    scrollbar: {
      el: '.swiper-scrollbar',
      dragSize: '174', 
      draggable: true,
    },
    pagination: {
      el: '.stock-swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.pagination-down-text',
    },
    breakpoints: {
      320: {
        scrollbar: {
          dragSize: '110',
        }
      },
      561: {
        scrollbar: {
          dragSize: '174',
        }
      }
    }
  });
  const roomSwiper = new Swiper('.room-swiper', {
    // Optional parameters
    slidesPerView: 3,
    direction: 'horizontal',
    spaceBetween: 20,
    slideClass: 'room-slide',
    wrapperClass: 'room-wrapper',
    navigation: {
      nextEl: '.pagination-down-text',

    },
    scrollbar: {
      el: '.room-swiper-scrollbar',
      dragSize: '174',
      draggable: true,
    },
    pagination: {
      el: '.stock-swiper-pagination',
      type: 'fraction',
    },
    breakpoints: {
      320: {
        scrollbar: {
          dragSize: '110',
        }
      },
      561: {
        scrollbar: {
          dragSize: '174',
        }
      }
    },
    breakpoints: {
      320: {  
        spaceBetween: 0,
        slidesPerView: 1,
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      700: {
        slidesPerView: 3,
        spaceBetween: 20,

      },
    },
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


  const accordion = document.querySelectorAll('.price__accordion-block');
  // const accordionArrow = document.querySelectorAll('.arrow-img');
  accordion.forEach((e)=> {
    e.addEventListener('click', (el) => {
      const self = el.currentTarget;
      const arrow = self.querySelector('.arrow-img');
      console.log(arrow);
      self.classList.toggle('show');
      arrow.classList.toggle('show')
  })})
  
const select = document.querySelector('.select-form').addEventListener('click', showSelect);
const selectList = document.querySelector('.select-list');
const selectListP = document.querySelectorAll('.select-list p');
const selectInput = document.querySelector('.select-form-input');
const selectArrow = document.querySelector('.custom-arrow');
function showSelect() {
  selectList.classList.toggle('show');
  selectArrow.classList.toggle('rotate')
}

selectListP.forEach(e => {
  e.addEventListener('click', (el)=> {
    selectInput.value = e.innerHTML;
  })
})

const data = document.querySelector('.data');
data.textContent = '12 сентября 2022'

const playernum = document.querySelector('#playernumber').addEventListener('input', chekPlayer);
function chekPlayer(e) {
  if(e.value > 24 ) {
    alert( 'Не больше 24 игроков' )
    console.log(e);
  }
  return playernum
}

window.addEventListener('scroll', scrollHeader);
function scrollHeader(){
  const headerInner = document.querySelector('.header__inner');
  // if(this.scrollY >= 20)
  // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 20) headerInner.classList.add('headerbg');
  else  headerInner.classList.remove('headerbg');
};


const closeNavLink = document.querySelectorAll('.header__link');
closeNavLink.forEach(e => {
  e.addEventListener('click', () => {
    setTimeout(()=> {

      headerNav.classList.add('show')
      SpanDown.classList.toggle('open')
    SpanUp.classList.toggle('open')
    SpanMiddle.classList.toggle('open')
    }, 100)
  })
})


let center = [45.02736611000037,39.02762492394255];

function init() {
	let map = new ymaps.Map('map', {
		center: center,
		zoom: 17
	});
  let placemark = new ymaps.Placemark([45.02736611000037,39.02762492394255], {}, {
		iconLayout: 'default#image',
		iconImageHref: '/assets/img/maplogo.svg',
		iconImageSize: [40, 40],
		iconImageOffset: [-19, -44]
	});

	// map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
  map.geoObjects.add(placemark);
}

ymaps.ready(init);




const closePopup = document.querySelector('.close-popup').addEventListener('click', popupClose);
const popup = document.querySelector('.popup__back')
// const backClosePopup = document.querySelector('.popup__back').addEventListener('click', closeWithBack);
// const openPopupBtn = document.querySelector('.form__send-btn').addEventListener('click', openPopup);
// function openPopup() {
//   popup.classList.add('show')
// }

// function closeWithBack() {
//   this.classList.remove('show')
// }
function popupClose() {
  console.log('err');
  popup.classList.remove('show')
}




//  SEND MESSAGE 

$(function () {

  $('#form').on('submit', function (e) {

    e.preventDefault();

    $.ajax({
      type: 'post',
      url: '../../telegram.php',
      data: $('#form').serialize(),
      success: function () {
      popup.classList.add('show')
      }
    });

  });

});


const playInput = document.querySelector('#playernumber').addEventListener('input', inputNumber)

function inputNumber(e) {
  for(let i = 0; i <= e.length; i++) {
    console.log(e.value[i]);
  }
}