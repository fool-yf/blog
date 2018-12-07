class Singleton {
	// static instance = null;
	// name;

	/**
	 * @return {number}
	 */
	constructor(name) {
		if (!Singleton.instance) {
			this.name = name
			Singleton.instance = this
		}

		return Singleton.instance
	}
}

let s1 = new Singleton('fool')
let s2 = new Singleton('yf')
console.log(s1 === s2)