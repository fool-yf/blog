const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');  // 自动生成html文件
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 执行前清空dist文件夹
const ManifestPlugin = require('webpack-manifest-plugin');  // 模块映射到输出bundle的过程

module.exports = {
	entry: {
		app: './src/9-library/index.js',
		print: './src/9-library/print.js'
	},
	output: {
		filename: '[name].bundle.[hash].js',
		path: path.resolve(__dirname, 'dist9')
	},
	plugins: [
		new CleanWebpackPlugin(['dist9']),
		new HtmlWebpackPlugin({
			title: 'Output Management'
		}),
		new ManifestPlugin(),
	]
}