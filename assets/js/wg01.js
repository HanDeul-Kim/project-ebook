import { initLang, setTexts } from './lang.js'
import { lastLang } from './lang.js'
//* ===================================================================
//*                             Settings                               
//* ===================================================================
//- ----------------------------- html --------------------------------
pageNum = '01'
targetElem = '#canvas'
//- ----------------------------- model -------------------------------
modelFile = './assets/model/wg01/t-rex.glb'
modelScale = 0.3
modelPos = { x: 0.1, y: -1, z: 0 }
camInitPos = { x: 4.5, y: 0.5, z: -2.0 }
anyNum = 0
//* ===================================================================
//*                               Main                                 
//* ===================================================================
initialFn()
modelFn()
clock = new THREE.Clock()
updateFn()
btnNodes = []
btnObjs = []
addBtnFn('01', '', { x: -0.7, y: -0.2, z: 0 }, { x: 6, y: 0, z: 1.5 }, 4) //뒷발
addBtnFn('02', '', { x: 1.5, y: 0.5, z: -0.1 }, { x: 6, y: 1, z: -0.5 }, 1) //이빨
addBtnFn('03', '', { x: 0.9, y: -0.2, z: 0 }, { x: 5, y: 0, z:4  }, 2) //앞다리
addBtnFn('04', '', { x: -0.3, y: -0.95, z: 0 }, { x: 5, y: 0, z: -6 }, 3) //뒷발톱
//* ===================================================================
//*                               Core                                 
//* ===================================================================
//- --------------------------- initialFn -----------------------------
export function initialFn() {
    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera(45, canvasWidthFn() / canvasHeightFn(), 0.01, 5000)
    camera.position.set(camInitPos.x, camInitPos.y, camInitPos.z)
    camera.aspect = canvasWidthFn() / canvasHeightFn()
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(window.devicePixelRatio || 1)
    renderer.setSize(canvasWidthFn(), canvasHeightFn())
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 5;
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.physicallyCorrectLights = true
    domEvents = new THREEx.DomEvents(camera, renderer.domElement)
    renderer2d = new THREE.CSS2DRenderer()
    renderer2d.setSize(canvasWidthFn(), canvasHeightFn())
    renderer2d.domElement.style.position = 'absolute'
    renderer2d.domElement.style.top = '0px'
    renderer2d.domElement.style.zIndex = 9
    controls = new THREE.OrbitControls(camera, renderer.domElement)
    controls2d = new THREE.OrbitControls(camera, renderer2d.domElement)
    controls2d.minDistance = 3
    controls2d.maxDistance = 8
    controls2d.maxPolarAngle = Math.PI / 1.84
    controls2d.enablePan = false
    hLight = new THREE.HemisphereLight('#fff')
    scene.add(hLight)
    dLight = new THREE.DirectionalLight('#fff', 1)
    dLight.position.set(1.5, 2, -2)
    scene.add(dLight)
    document.querySelector(targetElem).appendChild(renderer.domElement)
    document.querySelector(targetElem).appendChild(renderer2d.domElement)
    window.addEventListener('resize', () => {
        renderer.setSize(canvasWidthFn(), canvasHeightFn())
        renderer2d.setSize(canvasWidthFn(), canvasHeightFn())
        camera.aspect = canvasWidthFn() / canvasHeightFn()
        camera.updateProjectionMatrix()
        resizeFn()
    })
    resizeFn()
}
//- ---------------------------- modelFn ------------------------------
export function modelFn() {
    modelLoader = new THREE.GLTFLoader()
    modelLoader.load(modelFile, (gltf) => {
        modelObj = gltf.scene
        modelObj.name = 'modelObj'
        modelObj.scale.set(modelScale, modelScale, modelScale)
        modelObj.position.set(modelPos.x, modelPos.y, modelPos.z)
        modelObj.rotation.y = Math.PI / 2
        modelObj.traverse(function (child) {
            if (child.isMesh) {
                child.castShadow = true
                child.receiveShadow = true
                child.material.roughness = 0.9;
                child.material.transparent = true
            }
        })
        scene.add(modelObj)
        mixer = new THREE.AnimationMixer(modelObj)
        animates = []
        gltf.animations.forEach(clip => {
            const animate = mixer.clipAction(clip)
            animate.clampWhenFinished = true
            animate.loop = -1 //THREE.LoopOnce
            animates.push(animate)
        })
        animatePlay(anyNum)
        let spinner = document.querySelector('.spinner')
        let canvasEl = document.querySelector('#canvas')
        gsap.to(spinner, {
            opacity: 0, duration: 1.3, ease: 'Power0.easeNone',
            onComplete: () => spinner.style.display = 'none'
        })
        gsap.to(canvasEl, { opacity: 1, duration: 1.5, ease: 'Power0.easeNone', })
    })
}
//- --------------------------- updateFn ------------------------------
export function updateFn() {
    camera.lookAt(0, 0, 0)
    requestAnimationFrame(updateFn)
    const delta = clock.getDelta()
    if (mixer) mixer.update(delta)
    renderer.render(scene, camera)
    renderer2d.render(scene, camera)
}
//* ===================================================================
//*                              Buttons                               
//* ===================================================================
function addBtnFn(btnNum, tippyTitle, btnPos, camMovePos, aniIndex) {
    btnHtml = `<a href="javascript:;" id="wgBtn${btnNum}" class="wgBtn"></a>` //<!--<span class="material-icons wgBtnIcon">add_circle</span>-->
    btnNode = document.createElement('div')
    btnNode.innerHTML = btnHtml
    btnNode = btnNode.children[0]
    document.body.appendChild(btnNode)
    btnObj = new THREE.CSS2DObject(btnNode)
    btnObj.name = 'wgBtn' + btnNum
    btnObj.position.set(btnPos.x, btnPos.y, btnPos.z)
    btnNodes.push(btnNode)
    btnObjs.push(btnObj)
    scene.add(btnObj)
    tippy(`#wgBtn${btnNum}`, {
        content: `<span class="tooltipTitle" id="wg${pageNum}BtnT${btnNum}">${tippyTitle}</span>`,
        allowHTML: true, arrow: true, animation: 'animate01',
        delay: [0, 100], duration: 500, placement: 'right-start',
        onMount(instance) {
            // setTexts(initLang())
            let hash = window.parent.location.hash.replace('#', '')
            if (hash) setTexts(hash)
            else setTexts('en')
        }
    })
    btnNode.addEventListener('click', () => {
        let screamWrap = window.parent.document.querySelectorAll(".scream-wrap");
        gsap.to(screamWrap, {
            opacity: 0,
            visibility:"hidden",
            duration: 0,
            ease: 'Power3.ease',
        })
        animatePlay(aniIndex)
        let tippyItems = document.querySelectorAll('[id*="tippy-"]')
        for (let item of tippyItems) item.style.display = 'none'
        for (let btnObj of btnObjs) scene.remove(btnObj)
        gsap.to(camera.position, { x: camMovePos.x, y: camMovePos.y, z: camMovePos.z, duration: 1, ease: 'Power2.easeInOut', onComplete: () => { } })
        gsap.to(modelObj.position, { y: '+=0.2', duration: 1, ease: 'Power1.easeOut', onComplete: () => { } })
        let modal = document.querySelector(`#modal${btnNum}`)
        modal.style.display = 'flex'
        gsap.to(modal, {
            bottom: "2%", opacity: 1, duration: 1, ease: 'Power3.easeOut',
            onComplete: () => {
                let modalClose = modal.querySelector('.modalClose')
                modalClose.addEventListener('click', () => {
                    animatePlay(anyNum)
                    gsap.to(screamWrap, {
                        opacity:1,
                        visibility:"visible",
                        duration:0,
                    })
                    gsap.to(modal, {
                        bottom: "-100px", opacity: 0, duration: 1, ease: 'Power3.ease',
                        onComplete: () => { modal.style.display = 'none' }
                    })
                    gsap.to(camera.position, {
                        x: camInitPos.x, y: camInitPos.y, z: camInitPos.z, duration: 1, ease: 'Power2.easeInOut',
                        onComplete: () => {
                            for (let btnObj of btnObjs) scene.add(btnObj)
                            for (let item of tippyItems) item.style.display = 'block'
                        }
                    })
                    gsap.to(modelObj.position, { y: '-=0.2', duration: 1, ease: 'Power1.easeOut', onComplete: () => { } })
                    audioModal.pause();
                })
            },
        })
    })
}


//* ===================================================================
//*                             Functions                              
//* ===================================================================
function resizeFn() {
    if (parent.matchMedia('(orientation: landscape)').matches) {
        if (innerHeight < 300) camera.zoom = 1.5
        else if (innerHeight < 400) camera.zoom = 1.3
        else if (innerHeight < 500) camera.zoom = 1.3
        else if (innerHeight < 600) camera.zoom = 1.0
        else camera.zoom = 1
    }
    camera.updateProjectionMatrix()
}
//- -------------------------- animatePlay ----------------------------
function animatePlay(index) {
    for (let animate of animates) animate.stop()
    animates[index].play()
}
//- ------------------------- canvasWidthFn ---------------------------
function canvasWidthFn() {
    return window.innerWidth
}
//- ------------------------ canvasHeightFn ---------------------------
function canvasHeightFn() {
    return window.innerHeight
}
//- -------------------------- getOrientFn ----------------------------
function getOrientFn() {
    return window.matchMedia('(orientation: portrait)').matches
}
//- ---------------------------- turnOn -------------------------------
export function turnOn() {
    if (!scene.children.includes(hLight)) scene.add(hLight)
    if (!scene.children.includes(dLight)) scene.add(dLight)
    if (!scene.children.includes(btnObj)) scene.add(btnObj)
    if (!scene.children.includes(modelObj)) scene.add(modelObj)
    if (modelObj.children.length === 0) {
        modelFn()
    }
}
//- ---------------------------- turnOff ------------------------------
export function turnOff() {
    if (scene.children.includes(hLight)) scene.remove(hLight)
    if (scene.children.includes(dLight)) scene.remove(dLight)
    if (scene.children.includes(btnObj)) scene.remove(btnObj)
    if (scene.children.includes(modelObj)) scene.remove(modelObj)
    modelObj.remove.apply(modelObj, modelObj.children)
}
//* ===================================================================
//*                             Variables                              
//* ===================================================================
//- ---------------------------- setting ------------------------------
var targetElem, pageNum, anyNum
var modelFile, modelScale, modelPos, camInitPos
//- ---------------------------- initFn -------------------------------
var scene, camera, renderer, controls, controls2d, hLight, dLight, dLight2, renderer2d, domEvents
//- ---------------------------- modelFn ------------------------------
var modelLoader, mixer, modelObj, animates
//- --------------------------- updateFn ------------------------------
var clock
//- ----------------------------- btnFn -------------------------------
var btnHtml, btnNode, btnObj, btnNodes, btnObjs

//- ------------------------------ etc --------------------------------
console.warn = () => { }
/////////////////////////////////// custom //////////////////////////////////////////
var audioModal, sourceModal
let infoBtn = window.parent.document.querySelectorAll(".rano_scream");
infoBtn.forEach(function (e) {
    e.addEventListener("click", function () {
        for (let btnObj of btnObjs) scene.remove(btnObj)
        let modal2 = document.querySelector(`#sub_modal`)
        modal2.style.display = 'flex'
        gsap.to(modal2, {
            bottom: "0%", opacity: 1, duration: 1, ease: 'Power3.easeOut',
            onComplete: () => {
                let modalClose = modal2.querySelector('.modalClose')
                modalClose.addEventListener('click', () => {
                    var audio = window.parent.document.getElementById('audio');
                    audio.pause();
                    for (let btnObj of btnObjs) scene.add(btnObj)
                    gsap.to(modal2, {
                        bottom: "-100px", opacity: 0, duration: 1, ease: 'Power3.ease',
                        onComplete: () => { modal2.style.display = 'none' }
                    })
                })
            },
        })
    })
})
// modalAudio
const wgBtns = document.querySelectorAll(".wgBtn");
let current = 1;
wgBtns.forEach(audioBtn => {
    audioBtn.setAttribute("data-url", `./assets/audio/${lastLang}/p${pageNum}_modal0${current++}_${lastLang}.mp3`)
    audioBtn.addEventListener("click", function () {
        audioModal = window.parent.document.getElementById("audioModal");
        sourceModal = window.parent.document.getElementById("sourceModal");
        sourceModal.src = this.dataset.url;
        audioModal.load();
        audioModal.play();
        // 기존 audio pause
        let parent_audio = window.parent.document.getElementById('audio');
        parent_audio.pause();
    })
})
