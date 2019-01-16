import React, { Component } from 'react'

export default class Cat extends Component {
	render () {
		const mouse = this.props.mouse;

		return (
			<div>
				<span className="cat" style={{position: 'absolute', left: mouse.x, top: mouse.y}}>123</span>
			</div>
		)
	}
}