const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');  // 自动生成html文件
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 执行前清空dist文件夹
const ManifestPlugin = require('webpack-manifest-plugin');  // 模块映射到输出bundle的过程

module.exports = {
	entry: {
		app: './src/5-treeShaking/index.js',
	},
	output: {
		filename: '[name].bundle.[hash].js',
		path: path.resolve(__dirname, 'dist5')
	},
	module: {
		rules: [
			{
				sideEffects: false
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist5']),
		new HtmlWebpackPlugin({
			title: 'Output Management'
		}),
		new ManifestPlugin(),
	],
	// mode: "development" // 开发模式  todo?并没有tree-shaking
	mode: 'production' // 生产模式自带压缩代码
}