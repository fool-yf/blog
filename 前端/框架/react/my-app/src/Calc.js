import React, { Component } from 'react'
import {toCelsius, toFahrenheit, tryConvert} from './calcF'
import BoilingVerdict from "./BoilingVerdict"
import TemperatureInput from "./TemperatureInput"


export default class Calc extends Component {
	constructor(props) {
		super(props)

		this.state = {
			temperature: '',
			scale: 'c'
		}

		this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
		this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
	}

	handleCelsiusChange(temperature) {
		this.setState({
			scale: 'c',
			temperature: temperature
		})
	}

	handleFahrenheitChange(temperature) {
		this.setState({
			scale: 'f',
			temperature: temperature
		})
	}

	render() {
		const scale = this.state.scale;
		const temperature = this.state.temperature;
		const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
		const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

		return (
			<div>
				<TemperatureInput scale="c"
				                  temperature={celsius}
				                  onTemperatureChange={this.handleCelsiusChange}/>

				<TemperatureInput scale="f"
				                  temperature={fahrenheit}
				                  onTemperatureChange={this.handleFahrenheitChange}/>

				<BoilingVerdict celsius={parseFloat(celsius)}/>
			</div>
		)
	}
}