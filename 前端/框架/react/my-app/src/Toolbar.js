import React, { Component } from 'react'
import ThemeButton from "./ThemeButton"

export default class Toolbar extends Component {
	render() {
		return (
			<ThemeButton name="theme" onClick={this.props.changeTheme}>
				change Theme
			</ThemeButton>
		)
	}
}