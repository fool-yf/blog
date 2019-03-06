import 'babel-polyfill';
function component() {
	let element = document.createElement('div');
	element.innerHTML = _.join(['hello, world'], " ");

	// this.alert('hello');

	return element;
}

document.body.appendChild(component());


