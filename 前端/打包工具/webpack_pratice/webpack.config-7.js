const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');  // 自动生成html文件
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 执行前清空dist文件夹
const ManifestPlugin = require('webpack-manifest-plugin');  // 模块映射到输出bundle的过程

// 方法1： splitChunks
// module.exports = {
// 	entry: {
// 		app: './src/7-codeSplitting/index.js',
// 		another: './src/7-codeSplitting/another-module.js'
// 	},
// 	output: {
// 		filename: '[name].bundle.js',
// 		path: path.resolve(__dirname, 'dist7')
// 	},
// 	plugins: [
// 		new CleanWebpackPlugin(['dist7']),
// 		new HtmlWebpackPlugin({
// 			title: 'Code Splitting'
// 		}),
// 		new ManifestPlugin(),
// 	],
// 	optimization: {
// 		// 将公共的模块分离到单独的chunk
// 		splitChunks: {
// 			chunks: "all"
// 		}
// 	}
// }

module.exports = {
	entry: {
		app: './src/7-codeSplitting/index-import.js',
	},
	output: {
		filename: '[name].bundle.js',
		chunkFilename: "[name].bundle.js",  // 决定非入口chunk的名称
		path: path.resolve(__dirname, 'dist7')
	},
	plugins: [
		new CleanWebpackPlugin(['dist7']),
		new HtmlWebpackPlugin({
			title: 'Code Splitting'
		}),
		new ManifestPlugin(),
	]
}