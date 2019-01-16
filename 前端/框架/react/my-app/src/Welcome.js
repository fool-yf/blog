import React, { Component } from 'react';

class Welcome extends Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date()
		}
	}

	componentDidMount() {
		this.timerId = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerId)
	}

	tick() {
		// 参数：对象
		this.setState({
			date: new Date()
		})

		// 参数：函数
		// this.setState( function (prevState, props) {
		// 	return {
		// 		date: new Date()
		// 	}
		// })
	}

	render() {
		return (
			<div>
				<h1>hello, {this.props.name}</h1>
				<p>time: {this.state.date.toLocaleString()}</p>
			</div>
		)
	}
}

export default Welcome;