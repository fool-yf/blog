import print from './print.js';

function component() {
	let element = document.createElement('div');
	let btn = document.createElement('button');

	btn.innerHTML = 'click me';
	btn.onclick = print;

	element.appendChild(btn);

	return element;
}

document.body.appendChild(component());
