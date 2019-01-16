import React, { Component } from 'react'
import { ThemeContext } from './theme-context-'

export default class ThemeButton extends Component {
	render() {
		return (
			<ThemeContext.Consumer>
				{
					({theme, toggleTheme}) => (
						<div>
							<button
								{...this.props}
								style={{backgroundColor: theme.background}}>
								ThemeButton
							</button>
							<button onClick={toggleTheme}>changeColor</button>
						</div>
					)
				}
			</ThemeContext.Consumer>
		)
	}
}