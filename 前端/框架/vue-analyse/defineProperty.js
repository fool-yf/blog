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
	observe(obj) {
		if (this.is('Array', obj)) {
			this.overrideArrayProto(obj);
		}

		Object.keys(obj).forEach((key) => {
			let val = obj[key];

			Object.defineProperty(obj, key, {
				get: () => {
					return val;
				},
				set: (newVal) => {
					if (val !== newVal) {
						if (this.is('Object', newVal)|| this.is('Array', obj[key])) {
							this.observe(newVal)
						}

						this.callback(val, newVal);
						val = newVal;
					}
				}
			})

			if (this.is('Object', obj[key]) || this.is('Array', obj[key])) {
				this.observe(obj[key])
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
	 * 数组方法的重写
	 * @param array
	 */
	overrideArrayProto (array) {
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

					self.observe(this);
					self.callback(oldArray, this);

					return result;
				},
				writable: true,
				configurable: true,
				enumerable: true
			})
		}, this)

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
let v = new V(obj, function (val, newVal) {
	console.log(`oldVal: ${JSON.stringify(val)}, newVal: ${JSON.stringify(newVal)}`)
})

obj.b.d.push(6);
console.log(JSON.stringify(obj))