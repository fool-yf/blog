/**
 * promise版本
 * @returns {Promise<HTMLElement | never>}
 */
// function getComponent() {
// 	return import(/* webpackChunkName: "lodash" */'lodash') // 注释可以命名bundle
// 		.then(_ => {
// 			let element = document.createElement('div')
// 			element.innerHTML = _.join(['hello', 'webpack'], ' ')
// 			return element
// 		})
// 		.catch((err) => {
// 			console.log(`err: ${err}`)
// 		})
// }
//
// getComponent().then((component) => {
// 	document.body.appendChild(component)
// })

/**
 * async-await 版本
 * @returns {Promise<HTMLElement>}
 */
async function getComponent() {
	let element = document.createElement('div')
	let _ = await import(/* webpackChunkName: "lodash-async" */'lodash');

	element.innerHTML = _.join(['hello', 'webpack'], ' ')
	return element
}

getComponent().then((component) => {
	document.body.appendChild(component)
})
