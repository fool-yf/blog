let person = {
	name: '张三'
}

let proxy = new Proxy(person, {
	get: function(target, property) {
		if (property in target) {
			return target[property];
		} else {
			throw new ReferenceError("Property \"" + property + "\" does not exist.");
		}
	}
});

console.log(proxy.name);  // 张三
console.log(proxy.age); // ReferenceError: Property "age" does not exist.