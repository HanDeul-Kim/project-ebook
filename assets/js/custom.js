
// ==========================================     반응형 주소창 미포함     ==========================================
function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
setScreenSize();
window.addEventListener('resize', () => setScreenSize());
disableScroll = () => {
    document.querySelector('body').addEventListener('touchmove', this.removeEvent, { passive: false });
    document.querySelector('body').addEventListener('onclick', this.removeEvent, { passive: false });
    document.querySelector('body').addEventListener('mousewheel', this.removeEvent, { passive: false });
}
removeEvent = e => {
    e.preventDefault();
    e.stopPropagation();
}
enableScroll = () => {
    document.querySelector('body').removeEventListener('touchmove', this.removeEvent);
    document.querySelector('body').removeEventListener('onclick', this.removeEvent);
    document.querySelector('body').removeEventListener('mousewheel', this.removeEvent);
}
// ==========================================     초기 애니메이션     ==========================================
gsap.from(".page01_overlay", {
    opacity: 0,
    duration: 1,
    delay: 1,
    ease: "power1",
});
gsap.from(".page01_overlay02", {
    opacity: 0,
    duration: 1,
    delay: 1.5,
    ease: "power3",
});
gsap.from(".page01_overlay03", {
    opacity: 0,
    duration: 1,
    delay: 2,
    ease: "power3",
});
// ==========================================     Swiper01     ==========================================
var menu = ['', '', '']
var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    loop: true,
    speed: 300,
    allowTouchMove: false,
    //swiper button custom 
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return `<div class="${className}">${menu[index]}</div>`
        },
    },
});
// ==========================================     Swiper02(sketchBook)     ==========================================
var swiper2 = new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 70,
    centeredSlides: true,
    slidesPerView: 3,
    mousewheel: true,
    loop: true,
});
// sketchBook slide custom
function swiperSmall() {
    swiper2 = new Swiper('.swiper-container', {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: true,
        slidesPerView: 3,
        mousewheel: true,
    });
}
function swiperLarge() {
    swiper2 = new Swiper('.swiper-container', {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 70,
        centeredSlides: true,
        slidesPerView: 3,
        mousewheel: true,
    });
}
// change swiper
let vh = window.innerHeight;
if (vh < 400) {
    swiperSmall();
}
window.addEventListener("resize", function () {
    let vh = window.innerHeight;
    if (vh < 400) {
        swiperSmall();
    } else {
        swiperLarge();
    }
})
// ==========================================     공룡 배경음악     ==========================================
const eTarget = [".flipBtnR", ".progressbar-inner", ".progressbar-inner-single"];
eTarget.forEach(test => {
    document.querySelector(test).addEventListener("click", function () {
        audioPlay();
    }, { once: true })
})
window.addEventListener("keyup", function (e) {
    let keyArr = ["ArrowLeft", "ArrowRight"]
    for (var i = 0; i < keyArr.length; i++) {
        if (e.key == keyArr[i]) {
            audioPlay()
        }
    }
}, { once: true })
function audioPlay() {
    var audioBack = document.getElementById('audio_back')
    var sourceBack = document.getElementById('source_back')
    sourceBack.src = `./assets/audio/background.mp3`
    audioBack.load();
    audioBack.play();
}
// ==========================================     sketchBook event     ==========================================

const sketch_btn = document.querySelectorAll(".sketchbook_btn");
const iframeColor = document.querySelectorAll(".color_iframe");
sketch_btn.forEach(btn => {
    btn.addEventListener("click", function () {
        for (var i = 0; i < iframeColor.length; i++) {
            iframeColor[i].classList.remove("active");
            iframeColor[btn.dataset.colornum].classList.add("active");
        }
    })
})
let sketchTitle = document.querySelectorAll(".sketch-title");
sketchTitle.forEach(sTitle => {
    sTitle.addEventListener("click", function () {
        for (var i = 0; i < iframeColor.length; i++) {
            iframeColor[i].classList.remove("active");
            iframeColor[this.dataset.colornum].classList.add("active");
        }
    })
})
// sketchBook swiper 이동
let sketchs = document.querySelectorAll(".slide-sketch");
sketchs.forEach(function (e) {
    e.addEventListener("click", function (e) {
        var index = $(this).index();
        swiper2.slideTo(index)
    })
})
for (const slide of sketchs) {
    slide.addEventListener("click", function () {
        for (var k = 0; k < sketch_btn.length; k++) {
            sketch_btn[k].classList.remove("active");
        }
        if (this.classList.contains("swiper-slide-active")) {
            this.children[0].firstElementChild.classList.add("active");
        }
    })
}

