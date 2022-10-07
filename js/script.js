// MENU TOGGLE BURGER
$(document).ready(function () {
  $('.header-burger').click(function (event) {
      $('.header-burger,.header-menu').toggleClass('active');
      $('body').toggleClass('lock');
  });
});

$(document).ready(function() {
  $('.header__link').click(function(event) {
    $('body').removeClass('lock');
    $('.header-burger,.header-menu').removeClass('active');
  })
});


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


// SLIDERS
// 1. MAIN IMAGE
var ownersSwiper = new Swiper(".ownersSwiper", {
  spaceBetween: 30,
  loop: 0,
  breakpoints: {
    1024: {
      slidesPerView: 4,
    },
    991: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next-1",
    prevEl: ".swiper-button-prev-1",
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
