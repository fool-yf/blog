/**
 * 引用： http://hcysun.me/2016/04/28/JavaScript%E5%AE%9E%E7%8E%B0MVVM%E4%B9%8B%E6%88%91%E5%B0%B1%E6%98%AF%E6%83%B3%E7%9B%91%E6%B5%8B%E4%B8%80%E4%B8%AA%E6%99%AE%E9%80%9A%E5%AF%B9%E8%B1%A1%E7%9A%84%E5%8F%98%E5%8C%96/
 */
class V {
	constructor(obj, callback) {
		this.callback = callback;

		if (!this.is('Object', obj)) {
			console.log(`err: ${obj} must be an Object`)
			return;
		}

		this.observe(obj);
	}

	/**
	 * 绑定所有属性
	 * @param obj
	 */
	observe(obj, path) {
		if (this.is('Array', obj)) {
			this.overrideArrayProto(obj, path);
		}

		Object.keys(obj).forEach((key) => {
			let val = obj[key];
			let pathArray = path && path.slice(0);

			if (pathArray) {
				pathArray.push(key);
			} else {
				pathArray = [key];
			}

			Object.defineProperty(obj, key, {
				get: () => {
					return val;
				},
				set: (newVal) => {
					if (val !== newVal) {
						if (this.is('Object', newVal)|| this.is('Array', obj[key])) {
							this.observe(newVal, pathArray)
						}

						this.callback(val, newVal, pathArray);
						val = newVal;
					}
				}
			})

			if (this.is('Object', obj[key]) || this.is('Array', obj[key])) {
				this.observe(obj[key], pathArray)
			}
		})
	}

	/**
	 * 类型判断
	 * @param type
	 * @param obj
	 * @returns {boolean}
	 */
	is (type, obj) {
		return Object.prototype.toString.call(obj) === '[object ' + type + ']'
	}

	/**
	 * 代理数据方法
	 * @param array
	 */
	overrideArrayProto (array, path) {
		const OAM = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];
		let arrayPrototype = Array.prototype;
		let overrideProto = Object.create(arrayPrototype);
		let result;
		let self = this;

		Object.keys(OAM).forEach(function (key, index) {
			let method = OAM[index];
			let oldArray = [];

			Object.defineProperty(overrideProto, method, {
				value: function() {
					oldArray = this.slice(0);

					let arg =  Array.from(arguments);
					result = arrayPrototype[method].apply(this, arg);

					// self.observe(this);
					self.callback(oldArray, this, path);

					return result;
				},
				writable: true,
				configurable: true,
				enumerable: false
			})
		}, this)

		// __proto__ (隐式原型: 指向构造函数的prototype)
		array.__proto__ = overrideProto;
	}
}

let obj = {
	a: 1,
	b: {
		c: 2,
		d: [3, 4, 5],
		e: {
			f: 6
		}
	}
}
let v = new V(obj, function (val, newVal, path) {
	console.log(`oldVal: ${JSON.stringify(val)}, newVal: ${JSON.stringify(newVal)} path: ${path}`)
})

obj.b.d.push(3)
console.log(JSON.stringify(obj))
console.log(`..............`)
obj.a = 2;
console.log(JSON.stringify(obj))