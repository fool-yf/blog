import React, { Component } from 'react';
import './buttons.css'

class Buttons extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isToggle: true
		}

		// this.handleClick = this.handleClick.bind(this)
	}

	handleClick(id, e) {
		console.log(id, e)
		this.setState(prevState => ({
			isToggle: !prevState.isToggle
		}))
	}

	// 属性初始化器
	// handleClick = () => {
	// 	this.setState(prevState => ({
	// 		isToggle: !prevState.isToggle
	// 	}))
	// }

	render() {
		return (
			<button onClick={this.handleClick.bind(this, 123)}>
				{this.state.isToggle ? 'on' : 'off'}
			</button>
		)
	}
}

export default Buttons