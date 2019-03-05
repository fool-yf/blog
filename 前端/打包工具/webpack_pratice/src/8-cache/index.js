import _ from 'lodash'
import print from './print'
// import test from './test'

function component() {
	// console.log(test());

	let element = document.createElement('div');
	element.innerHTML = _.join(['hello', 'webpack'], ' ');

	element.onclick = print.bind(null, 'hello, world');
	return element;
}

document.body.appendChild(component());