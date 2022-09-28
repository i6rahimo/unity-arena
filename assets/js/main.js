
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js';

const swiper = new Swiper('.swiper', {
  // Optional parameters
    // modules: [ Navigation, Pagination],
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
      700: {
        slidesPerView: 3,
    spaceBetween: 20,

      },
      500: {
        slidesPerView: 2,
    spaceBetween: 10,

      },
      360: {
    spaceBetween: 0,
    slidesPerView: 1,
      }
    }
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
  const accordionArrow = document.querySelectorAll('.arrow-img');
  accordion.forEach((e)=> {
    e.addEventListener('click', (el) => {
    e.classList.toggle('show')
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

let center = [45.02736611000037,39.02762492394255];

function init() {
	let map = new ymaps.Map('map', {
		center: center,
		zoom: 17
	});
  let placemark = new ymaps.Placemark([45.02736611000037,39.02762492394255], {}, {
		iconLayout: 'default#image',
		iconImageHref: '../img/maplogo.svg',
		iconImageSize: [40, 40],
		iconImageOffset: [-19, -44]
	});

	map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
  map.geoObjects.add(placemark);
}

ymaps.ready(init);