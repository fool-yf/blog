import React, { Component } from 'react';
import ConditionT from './ConditionT';
import ConditionF from './ConditionF';

export default class Condition extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isToggle: true
		}
	}

	handleClick = () => {
		this.setState((pervState) => ({
			isToggle: !pervState.isToggle
		}))
	}

	render() {
		let comp = null;
		if (this.state.isToggle) {
			comp = <ConditionT/>
		} else {
			comp = <ConditionF/>
		}

		return (
			<div>
				{comp}
				<button onClick={this.handleClick}>
					{this.state.isToggle ? 'true' : 'false'}
				</button>
			</div>
		)
	}
}