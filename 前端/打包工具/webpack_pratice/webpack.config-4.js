const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');  // 自动生成html文件
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 执行前清空dist文件夹
const ManifestPlugin = require('webpack-manifest-plugin');  // 模块映射到输出bundle的过程
const webpack = require('webpack');

module.exports = {
	entry: {
		app: './src/4-HMR/index.js',
	},
	output: {
		filename: '[name].bundle.[hash].js',
		path: path.resolve(__dirname, 'dist3')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist3']),
		new HtmlWebpackPlugin({
			title: 'HMR'
		}),
		new ManifestPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist4',
		port: '8888',
		hot: true,
	}
}