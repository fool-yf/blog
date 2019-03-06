const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');  // 自动生成html文件
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 执行前清空dist文件夹
const ManifestPlugin = require('webpack-manifest-plugin');  // 模块映射到输出bundle的过程
const WorkboxPlugin = require('workbox-webpack-plugin');

/**
 * 默认入口是src/1-assetManagement/index.js
 * 默认出口是dist/bundle.js
 * @type {{entry: string, output: {filename: string, path: (*|*|string)}}}
 */
module.exports = {
	entry: './src/11-pwa/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist11')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader',
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					'file-loader'
				]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist11']),
		new HtmlWebpackPlugin({
			title: 'pwa'
		}),
		new WorkboxPlugin.GenerateSW({
			clientsClaim: true,
			skipWaiting: true
		}),
		new ManifestPlugin(),
	]
}