document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("burger").addEventListener("click", function() {
      document.querySelector(".header").classList.toggle("open")
  });
})
// Закрыть меню при нажатии на Esc
window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
      // Действие при клике
      document.querySelector(".header").classList.remove("open")
  }
});

// Закрыть меню при клике вне его
document.getElementById("menu").addEventListener('click', event => {
  event._isClickWithInMenu = true;
});
document.getElementById("burger").addEventListener('click', event => {
  event._isClickWithInMenu = true;
});
document.body.addEventListener('click', event => {
  if (event._isClickWithInMenu) return;
  // Действие при клике
  document.querySelector(".header").classList.remove("open")
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal', //'vertical'
  loop: true, //если true - то круговой слайдер
  speed: 500, //скорость перелистывания(в милисекундах)
  effect: 'slider', //slider, cards, coverflow, flip, fade, cube (способ перелистывания)
  slidesPerView: 1, //количество активных слайдов
  centeredSlides: true, //центрирование слайдов
  // freeMode: true, //можно перетаскивать как ленту
  spaceBetween: 20,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// Секция service

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".service__item__arrow_1").addEventListener("click", function() {
      document.querySelector(".service__item_1").classList.toggle("open")
  });
})

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".service__item__arrow_2").addEventListener("click", function() {
      document.querySelector(".service__item_2").classList.toggle("open")
  });
})

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".service__item__arrow_3").addEventListener("click", function() {
      document.querySelector(".service__item_3").classList.toggle("open")
  });
})

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".service__item__arrow_4").addEventListener("click", function() {
      document.querySelector(".service__item_4").classList.toggle("open")
  });
})

const swiper2 = new Swiper('.swiper2', {
  // Optional parameters
  direction: 'horizontal', //'vertical'
  loop: true, //если true - то круговой слайдер
  speed: 500, //скорость перелистывания(в милисекундах)
  effect: 'slider', //slider, cards, coverflow, flip, fade, cube (способ перелистывания)
  slidesPerView: 1, //количество активных слайдов
  centeredSlides: true, //центрирование слайдов
  // freeMode: true, //можно перетаскивать как ленту
  spaceBetween: 20,
  
  // Старотовый слайд
  initialSlide: 0,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    // clickable: true,
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      pagination: {
        type: 'bullets',
        clickable: true,
      }
    },
    768: {
      pagination: {
        type: 'fraction',
      }
    }
  },
});