function component() {
	let element = document.createElement('div');
	let btn = document.createElement('button');

	btn.innerHTML = 'click';
	element.appendChild(btn);

	return element;
}

document.body.appendChild(component());
