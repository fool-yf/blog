const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
	entry: {
		app: './src/6-product/index.js',
	},
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, 'dist6')
	},
	plugins: [
		new CleanWebpackPlugin(['dist6']),
		new HtmlWebpackPlugin({
			title: 'Production'
		})
	]
}