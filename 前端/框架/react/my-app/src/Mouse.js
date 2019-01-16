import React, { Component } from 'react'

export default class Mouse extends Component {
	constructor(props) {
		super(props);
		this.state = {
			x: 0,
			y: 0
		}

		this.handleMouseMove = this.handleMouseMove.bind(this)
	}

	handleMouseMove(e) {
		this.setState({
			x: e.clientX,
			y: e.clientY
		})
	}

	render() {
		return (
			<div style={{ height: '400px', position: 'relative', width: '100%'}} onMouseMove={this.handleMouseMove}>
				{this.props.children(this.state)}
			</div>
		)
	}
}