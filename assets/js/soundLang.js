import { lastLang } from './lang.js'
const selects = document.querySelectorAll(".select");
let page04Bg = document.querySelector(".page04 .pageContent");
let page06Bg = document.querySelector(".page06 .pageContent");
let page07Bg = document.querySelector(".page07 .pageContent");
let changePages = [page04Bg, page06Bg, page07Bg];
//==========================================     page04,06,07 bg change     ==========================================
function change(lang, page) {
    page.forEach(change => {
        let currentUrl = `url("./assets/img/page${change.dataset.bgnum}_bg_${lang}.jpg") no-repeat center center / cover`
        change.style.background = currentUrl;
    })
}
// language change
selects.forEach(function (e) {
    e.addEventListener("click", function () {
        change(lastLang, changePages);
    })
})

//==========================================     공룡 narration     ==========================================
let audioModal = document.getElementById('audioModal');
const narration = document.querySelectorAll(".narration");
narration.forEach(function (e) {
    e.addEventListener("click", function () {
        let swiperIndex = swiper[e.dataset.soundnum].realIndex;
        let currentAudio = e.dataset.soundnum;
        currentAudio++;
        if (swiper[e.dataset.soundnum].realIndex == swiperIndex) {
            var audio = document.getElementById('audio');
            var source = document.getElementById('source');
            var replaceSrc = swiperIndex + 1;
            source.src = `./assets/audio/${lastLang}/p0${currentAudio}_0${replaceSrc}_${lastLang}.mp3`
            audio.load();
            audio.play();
            //modal audio pause
            audioModal.pause();
        }
    })
})
// narration pause
const pagiBtn = document.querySelectorAll(".swiper-pagination-bullet");
for (var btn of pagiBtn)
    btn.addEventListener("click", function () {
        audio.pause();
    })

//==========================================     공룡 scream     ==========================================
const screamWrap = document.querySelectorAll(".scream-wrap");
screamWrap.forEach(scream => {
    scream.addEventListener("click", function (e) {
        source.src = `./assets/audio/${lastLang}/${e.target.dataset.title}_${lastLang}.mp3`
        audio.load();
        audio.play();
        //modal audio pause
        audioModal.pause();
    })
})
