import React, { Component } from 'react'

export default class SplitPane extends Component {
	render() {
		return(
			<div className="splitPane">
				<div className="left">
					{this.props.left}
				</div>
				<div className="right">
					{this.props.right}
				</div>
			</div>
		)
	}
}