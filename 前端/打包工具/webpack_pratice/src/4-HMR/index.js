import print from './print.js';
import './style.css'

function component() {
	let element = document.createElement('div');
	let btn = document.createElement('button');

	btn.innerHTML = 'click me';
	btn.onclick = print;

	element.appendChild(btn);

	return element;
}

let ele = component();

document.body.appendChild(ele);

if (module.hot) {
	module.hot.accept('./print.js', () => {
		console.log(`start Accepting the updated printMe module!.....`);
		document.body.removeChild(ele);
		ele = component();
		document.body.appendChild(ele);
		console.log(`end Accepting the updated printMe module!.....`);
	})
}
