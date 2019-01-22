import React, { Component } from 'react';

export default class NameForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isGoing: '',
			numberOfGuest: '',
			selectValue: '1'
		}

	}

	handleSubmit = (e) => {
		alert(`input value: ${JSON.stringify(this.state)}` );
		e.preventDefault();
	}

	handleChange = (e) => {
		const target = e.target;
		const name = target.name;
		const type = target.type;
		const value = type === 'checkbox' ? target.checked : target.value;

		this.setState({
			[name]: value
		})
	}

	handleSelectChange = (e) => {
		this.setState({
			selectValue: e.target.value
		})
	}

	render () {
		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor="">name</label>
				<input type="text"
				       name="isGoing"
				       value={this.state.isGoing}
				       onChange={this.handleChange}/>

				<input type="checkbox"
				       name="numberOfGuest"
				       checked={this.state.numberOfGuest}
				       onChange={this.handleChange}/>
				{this.state.numberOfGuest ? 'number' : 'guest'}

				<select value={this.state.selectValue} onChange={this.handleSelectChange}>
					<option value="1">LOL</option>
					<option value="2">DOTA2</option>
					<option value="3">守望先锋</option>
					<option value="4">王者农药</option>
				</select>

				<input type="submit" value='submit'/>
			</form>
		)
	}
}