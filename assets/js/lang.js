export let el, lang
export let lastLang, langFile
let texts
initEvent()
lang = initLang()
setTexts(lang)

function initEvent() {
    let countries = parent.document.querySelectorAll('.langCountry')
    countries.forEach(country => {
        country.addEventListener('click', function () { setTexts(this.dataset.lang) })
    })
}
export function initLang() {
    let hash = window.parent.location.hash.replace('#', '')
    if (hash) lang = hash
    // 초기 언어 설정 ko & en
    else lang = 'ko'
    return lang
}
export function setTexts(lang) {
    if (lastLang !== lang) {
        lastLang = lang
        langFile = `./assets/text/${lang}.json`
        fetch(langFile)
            .then(res => res.json())
            .then(res => {
                texts = res
                results()
            })
    }
    else { results() }
    function results() {
        for (let [key, value] of Object.entries(texts)) {
            el = document.querySelector(`#${key}`)
            if (el) el.innerText = value
        }
    }
}




