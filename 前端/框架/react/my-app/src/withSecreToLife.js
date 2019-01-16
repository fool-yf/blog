import React, { Component } from 'react';

const withSecretToLife = (WrappedComponent) => {
	class HOC extends Component {
		render () {
			return (
				<WrappedComponent
					{...this.props}
					secreToLife={42}/>
			)
		}
	}

	return HOC;
}

export default withSecretToLife
