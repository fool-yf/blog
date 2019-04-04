/**
 * Proxy （在目标对象之前假设一层"拦截"）外界对该对象的访问，都必须先通过这层拦截。
 * 属于一种"元编程"（对编程语言进行编程）
 * @type {{}}
 */
let obj = new Proxy({}, {
	get (target, key, receiver) {
		console.log(`getting.............`);
		console.log(`key: ${key}`);

		return Reflect.get(target, key, receiver)
	},
	set (target, key, value, receiver) {
		console.log(`setting.............`);
		console.log(`key: ${key}`);
		console.log(`value: ${value}`);
		return Reflect.set(target, key, value, receiver)
	}
})


obj.count = 100;
console.log(obj.count)

obj.arr = [1];
console.log(`push.......start`)
obj.arr.push(2);  // push没有触发set,只是触发了get
console.log(`push.......end`)
console.log(obj.arr);