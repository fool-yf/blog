import React, { Component } from 'react'
import SearchBar from "./SearchBar"
import ProductTable from "./ProductTable"

export default class FilterableProductTable extends Component {
	constructor(props) {
		super(props)

		this.state = {
			filterText: '',
			inStockOnly: false
		}

		this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
		this.handleInStockOnly = this.handleInStockOnly.bind(this);
	}

	handleFilterTextInput(filterText) {
		this.setState({
			filterText: filterText
		})
	}

	handleInStockOnly(inStockOnly) {
		this.setState({
			inStockOnly: inStockOnly
		})
	}

	render() {
		return (
			<div>
				<SearchBar filterText={this.state.filterText}
				           inStockOnly={this.state.inStockOnly}
				           onFilterTextInput={this.handleFilterTextInput}
				           onInStockInput={this.handleInStockOnly}/>

				<ProductTable products={this.props.products}
				              filterText={this.state.filterText}
				              inStockOnly={this.state.inStockOnly}/>
			</div>
		)
	}
}