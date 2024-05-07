const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
      // if we only use opacity then it's only invisible but still there so we can click it
      // such thing like opacity which requires number value is okay with gsap but when we use CSS stuff then we need string
      //window means our screen
    });
    // show button
    gsap.to('#to-top', .2, {
      x: 0
    });
  } else {
    // show badge
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // hide badge
    gsap.to('#to-top', .2, {
      x: 100
    });
  }
}, 300));
// we use this throttle with js library to avoid working a lot on the website when we scroll otherwise this website can be heavy
// _.throttle(function, time)
// gsap.to(element, running time, option)

toTopEl.addEventListener('click', function() {
  gsap.to(window, .7, {
    scrollTo: 0
    // gsap scroll plug-in
    // what: window (screen), running time: .7s, scroll to the 0px spot
  });
});

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // 0.7, 1.4, 2.1, 2.8
    // use animation for one second but .7s later it starts and it works for each one
    // if we only write .7s then at first it has 7s delay and no more
    // index is zero-based so we plus one
    opacity: 1
  });
});

// new Swiper(element, option)
new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper ('.promotion .swiper', {
  slidesPerView: 3, // how many slides we wanna show at once
  spaceBetween: 10, // margin between slides
  centeredSlides: true, // first slide would be centered
  loop: true,
  autoplay: {
    delay:5000
  },
  pagination: {
    el: '.promotion .swiper-pagination', //
    clickable: true //user's page numbering control
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});
new Swiper('.awards .swiper', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
})

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    promotionEl.classList.add('hide');
  } else {
    promotionEl.classList.remove('hide');
  }
})
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(selector, random(1.5, 2.5), {
    y: 20,
    repeat: -1, // = loop
    yoyo: true, // reuse the effect but in reverse way
    ease: Power1.easeInOut,
    delay: random(0, delay)
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook: .8
    }) 
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
    // 보기쉽게 메소드들 체인형태로 배치, {}는 객체형
});