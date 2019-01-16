import React, { Component } from 'react'
import FancyBorder from "./FancyBorder"
import './WelcomeDialog.css'

export default class WelcomeDialog extends Component {
	render() {
		return (
			<FancyBorder color="blue">
				<h1 className="Dialog-title">
					welcome
				</h1>

				<p className="Dialog-message">
					thank you for visiting our spacecraft
				</p>
			</FancyBorder>
		)
	}
}