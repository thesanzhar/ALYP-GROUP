

// LANGUAGE DROPDOWN
function dropdownFunc() {
  document.getElementById("lang-dropdown").classList.toggle("dropdown-show");
}

window.onclick = function(e) {
  if (!e.target.matches(".header__lang")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for(i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if(openDropdown.classList.contains("dropdown-show")) {
        openDropdown.classList.remove("dropdown-show");
      }
    }
  }
}

// LANGUAGE DROPDOWN
function dropdownFunc2() {
  document.getElementById("lang-dropdown-2").classList.toggle("dropdown-show");
}

window.onclick = function(e) {
  if (!e.target.matches(".header__lang")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for(i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if(openDropdown.classList.contains("dropdown-show")) {
        openDropdown.classList.remove("dropdown-show");
      }
    }
  }
}


// MENU TOGGLE BURGER
$(document).ready(function () {
  $('.header__burger').click(function (event) {
      $('.header__burger,.header__left').toggleClass('active');
      $('body').toggleClass('lock');
  });
});

$(document).ready(function() {
  $('.header__link').click(function(event) {
    $('body').removeClass('lock');
    $('.header__burger,.header__left').removeClass('active');
  })
})




// CALL MODAL WINDOW
$(document).ready(function () {
  $('.order-call').click(function (event) {
      $('.order-call,.order-call-modal').toggleClass('order-active');
      $('body').toggleClass('lock');
  });
});
$(document).ready(function () {
  $('.ic-close-icon').click(function (event) {
      $('.order-call,.order-call-modal').removeClass('order-active');
      $('body').toggleClass('lock');
  });
});

// Modal Youtube Jquery
$(".js-video-button").modalVideo();

// SLIDERS
// 1. MAIN IMAGE
var swiper = new Swiper(".mainImgSwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: 1,
  
  pagination: {
    el: ".swiper-pagination-1",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-1",
    prevEl: ".swiper-button-prev-1",
  },
});

// 2. NEW PRODUCTS
var swiper = new Swiper(".newProductsSwiper", {
  spaceBetween: 30,
  // centeredSlides: true,
  loop: 1,
  slidesPerView:4,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination-2",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-2",
    prevEl: ".swiper-button-prev-2",
  },
  breakpoints: {
    1200: {
      slidesPerView:4,
    },
    768: {
      slidesPerView:3,
    },
    480: {
      slidesPerView:2,
    },
    0: {
      slidesPerView:1,
    }
  }
});

// 3. ABOUT MAIN GALLERY
var swiper = new Swiper(".aboutMainSwiper", {
  direction: "vertical",
  slidesPerView: 3,
  loop: 1,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  spaceBetween: 20,
  mousewheel: true,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  breakpoints: {
    769: {
      direction: "vertical",
    },
    414: {
      spaceBetween: 20,
      direction: "horizontal",
    },
    0: {
      spaceBetween: 10,
      direction: "horizontal",
    }
  }
});

// 4. ABOUT ACHIEVEMENTS
var swiper = new Swiper(".aboutAchievementsSwiper", {
  spaceBetween: 30,
  // centeredSlides: true,
  loop: 1,
  slidesPerView: 3,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination-4",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-4",
    prevEl: ".swiper-button-prev-4",
  },
  breakpoints: {
    768: {
      slidesPerView:3,
    },
    480: {
      slidesPerView:2,
    },
    0: {
      slidesPerView:1,
    }
  }
});

// 5. ABOUT HISTORY
var swiper = new Swiper(".aboutHistorySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".aboutHistorySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next-5",
    prevEl: ".swiper-button-prev-5",
  },
  thumbs: {
    swiper: swiper,
  },
});

// MASK PHONE INPUT
var phoneMask = IMask(
  document.getElementById('order-call__customer-tel'), {
    mask: '+{7}(000)000-00-00',
  });
  document.getElementById("order-call__form").addEventListener('submit', function(e) {
  e.preventDefault()
  let phone =  document.getElementById('order-call__customer-tel')
  if(phone.value.length < 16){
    phone.style.border = '1px solid red';
    return
  }
  this.submit()
})
