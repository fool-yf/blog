function F() {
	console.log('F....')
}

let f = new F();
console.log(f.__proto__ === F.prototype); // true
console.log(F.__proto__ === Function.prototype); // true
console.log(Function.__proto__ === Function.prototype) // true

console.log(F.__proto__ === Function.__proto__); // true

console.log(Object.__proto__ === Function.prototype); // true
console.log(Object.__proto__ === Function.__proto__); // true

console.log(F.prototype.__proto__ === Object.prototype) // true
console.log(Function.prototype.__proto__ === Object.prototype)  // true
console.log(F.prototype.__proto__ === Function.prototype.__proto__) // true

console.log(Object.prototype.__proto__ === null)  // true