import _ from 'lodash'
import './css/index.css'
import Hehe from './img/hehe.gif'

if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker
			.register('/service-worker.js')
			.then(registration => {
				console.log('sw registered:', registration)
			})
			.catch(err => {
				console.log('sw registration failed:', err)
			})
	})
}

function component() {
	let element = document.createElement('div')
	element.innerHTML = _.join(['hello', 'webpack'], ' ')

	let img = new Image()
	img.src = Hehe

	element.appendChild(img)
	return element
}

document.body.appendChild(component())