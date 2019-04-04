let validator = {
	set (target, key, value) {
		if (key === 'age' && !Number.isInteger(value)) {
			throw new TypeError('The age is not an integer');
		}

		target[key] = value;
	}
}

let person = new Proxy({}, validator);

person.name = '小白';
person.age = 100;
person.age = 100.123123;  // throw new TypeError('The age is not an integer');