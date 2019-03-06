const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');  // 自动生成html文件
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 执行前清空dist文件夹
const ManifestPlugin = require('webpack-manifest-plugin');  // 模块映射到输出bundle的过程

module.exports = {
	entry: {
		app: './src/10-shim/index.js'
	},
	output: {
		filename: '[name].bundle.[hash].js',
		path: path.resolve(__dirname, 'dist10')
	},
	module: {
		rules: [
			// 引入babel-polyfill之后会发生错误
			// {
			// 	test: require.resolve('./src/10-shim/index.js'),
			// 	use: 'imports-loader?this=>window'  // 调整this指向
			// }
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist10']),
		new HtmlWebpackPlugin({
			title: 'Output Management'
		}),
		new ManifestPlugin(),
		// 告诉webpack如果最少有一处使用_，那就引入lodash
		new webpack.ProvidePlugin({
			_: 'lodash'
		})
	]
}