const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');  // 自动生成html文件
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 执行前清空dist文件夹
const ManifestPlugin = require('webpack-manifest-plugin');  // 模块映射到输出bundle的过程

/**
 * main bundle 会随着自身的新增内容的修改，而发生变化。
 * vendor bundle 会随着自身的 module.id 的修改，而发生变化
 * runtime bundle 会因为当前包含一个新模块的引用，而发生变化。
 */
module.exports = {
	entry: {
		app: './src/8-cache/index.js'
	},
	output: {
		filename: '[name].[contenthash].bundle.js',
		path: path.resolve(__dirname, 'dist8')
	},
	plugins: [
		new CleanWebpackPlugin(['dist8']),
		new HtmlWebpackPlugin({
			title: 'cache'
		}),
		new ManifestPlugin(),
		new webpack.HashedModuleIdsPlugin(),  // 解决当解析顺序发生变化，verdor bundle也会发生改变的现象
	],
	optimization: {
		//runtime文件是什么？帮助 webpack 编译构建后的打包文件在浏览器运行的一些辅助代码段，换句话说，打包后的文件，除了你自己的源码和npm库外，还有 webpack 提供的一点辅助代码段。
		runtimeChunk: 'single',
		splitChunks: {
			// 引入的三方库提取到单独的vendor chunk文件中
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: "all"
				}
			}
		}
	}
}