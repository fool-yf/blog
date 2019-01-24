import React, { Component } from 'react'

export default class RefInputDom extends Component {
	constructor(props) {
		super(props)
		
		this.textInput = React.createRef();
	}
	
	handleInputFocus = () => {
		this.textInput.current.focus();
	}
	
	render() {
		return (
			<div>
				<input type="text" ref={this.textInput}/>
				<button onClick={this.handleInputFocus}>focus</button>
			</div>
		);
	}
}