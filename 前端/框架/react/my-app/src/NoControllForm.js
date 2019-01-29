import React, { Component } from 'react'

export default class NoControllForm extends Component {
	handleSubmit = (e) => {
		alert(`${this.input.value}`)
		e.preventDefault();
	}

	render() {
		return (
			<form action="" onSubmit={this.handleSubmit}>
				<label htmlFor="">
					Name:
					<input
									type="text"
					       ref={(input) => this.input = input}
									defaultValue="hello"/>
					<input type="submit" value='submit'/>
				</label>
			</form>

		);
	}
}