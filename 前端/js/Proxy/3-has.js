let handler = {
	/**
	 * 拦截的是HasProperty操作
	 * 对for...in无效
	 * @param target
	 * @param key
	 * @returns {boolean}
	 */
	has (target, key) {
		if ((/^_/).test(key)) {
			return false;
		}

		return key in target;
	}
}

let target = {
	_prop: '_prop',
	prop: 'prop'
}

let proxy = new Proxy(target, handler);

console.log(`_prop: ${'_prop' in proxy} prop: ${'prop' in proxy}`); // _prop: false prop: true

//_prop _prop
// prop prop
for (let key in proxy) {
	console.log(key, proxy[key])
}