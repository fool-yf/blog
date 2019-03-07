const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');  // 自动生成html文件
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 执行前清空dist文件夹
const ManifestPlugin = require('webpack-manifest-plugin');  // 模块映射到输出bundle的过程

module.exports = env => {
	console.log(`NODE_ENV: ${env.NODE_ENV}`)
	console.log(`production: ${env.production}`)

	return {
		entry: {
			app: './src/13-env/index.js',
		},
		output: {
			filename: '[name].bundle.[hash].js',
			path: path.resolve(__dirname, 'dist13')
		},
		plugins: [
			new CleanWebpackPlugin(['dist13']),
			new HtmlWebpackPlugin({
				title: 'Output Management'
			}),
			new ManifestPlugin(),
		]
	}
}