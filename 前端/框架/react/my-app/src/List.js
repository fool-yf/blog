import React, { Component } from 'react'

export default class List extends Component {
	render () {
		const arr = [1,2,3,4,5,6];
		const listItems = arr.map((item) => {
			return <li key={item.toString()}>
							{item}
						</li>
		});

		return (
			<ul>
				{listItems}
			</ul>
		);
	}
}