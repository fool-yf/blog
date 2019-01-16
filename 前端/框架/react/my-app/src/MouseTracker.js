import React, { Component } from 'react';
import Mouse from "./Mouse"
import Cat from "./Cat"

export default class MouseTracker extends Component {
	render() {
		return (
			<div>
				<h1>Move the mouse around!</h1>
				<Mouse children={
					mouse => (
						<Cat mouse={mouse}/>
					)
				}/>
			</div>
		)
	}
}
