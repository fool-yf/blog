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

	// 属性初始化
	handleClick = () => {
		this.setState((prevState) => ({
			isToggle: !prevState.isToggle
		}))
	}

	render() {
		let comp = this.state.isToggle ? <ConditionT/> : <ConditionF/>; // 元素变量

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