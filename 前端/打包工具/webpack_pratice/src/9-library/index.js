import print from './print.js';
import {numToWord} from 'webpack-numbers-check'

function component() {
	let element = document.createElement('div');
	let btn = document.createElement('button');

	btn.innerHTML = 'click';
	btn.onclick = print;

	console.log(numToWord(2));
	element.appendChild(btn);

	return element;
}

document.body.appendChild(component());
