const merge = require('webpack-merge');
const common = require('./webpack.common-6');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist6'
	}
})