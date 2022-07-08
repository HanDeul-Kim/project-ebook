console.log = function() { }

const vue = new Vue({
	components: {
		VSwatches: window['vue-swatches']
	},
	data: () => ({
		color: '#FF407A',
	}),
	mounted() {
		this.init()
	},
	methods: {
		changeBackground(e) {
			if(e.target.hasAttribute('data-fill')) {
				e.target.style.fill = this.color
				e.target.style.transition = 'all 0.8s ease-out'
			}
		},
		init() {
			let object = document.querySelector('#svg01')
			for(let elem of object.children) {
				if(elem.style.fill === 'rgb(255, 255, 255)') {
					elem.setAttribute('data-fill', 'true')
				}
			}
		},
		btnReset() {
			let object = document.querySelector('#svg01')
			for(let elem of object.children) {
				if(elem.hasAttribute('data-fill')) {
					elem.style.fill = '#fff'
				}
			}
		},
		btnPrint() {
			let popup = window.open('./print.html', '_blank')
			// window.print();
		},
		btnDownload() {
			saveSvgAsPng(document.querySelector('#svg01'), 'picture.png', {scale: 4.5})
		},
	},
	el: '#app',
	vuetify: new Vuetify(),
})


const colorBtn = document.querySelectorAll(".vue-swatches__swatch");
for(var i = 0; i < colorBtn.length; i++) {
	colorBtn[i].addEventListener("click", function(){
		this.classList.add("active");
	})
}


