import _ from 'lodash'
import './css/index.css'
import Hehe from './img/Hehe.gif'

function component() {
	let element = document.createElement('div');
	element.innerHTML = _.join(['hello', 'webpack'], ' ');

	let img = new Image();
	img.src = Hehe;

	element.appendChild(img);
	return element;
}

document.body.appendChild(component());