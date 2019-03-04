const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');  // 自动生成html文件
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 执行前清空dist文件夹
const ManifestPlugin = require('webpack-manifest-plugin');  // 模块映射到输出bundle的过程

module.exports = {
	entry: {
		app: './src/3-development/index.js',
		print: './src/3-development/print.js'
	},
	output: {
		filename: '[name].bundle.[hash].js',
		path: path.resolve(__dirname, 'dist3')
	},
	plugins: [
		new CleanWebpackPlugin(['dist3']),
		new HtmlWebpackPlugin({
			title: 'Output Management'
		}),
		new ManifestPlugin(),
	],
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist3',
		port: '8888'
	}
}