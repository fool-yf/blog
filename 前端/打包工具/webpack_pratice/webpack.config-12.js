const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');  // 自动生成html文件
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 执行前清空dist文件夹
const ManifestPlugin = require('webpack-manifest-plugin');  // 模块映射到输出bundle的过程
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin"); // 测试webpack构建速度
const webpack = require('webpack');

const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap({
	entry: {
		app: './src/12-ts/index.ts',
	},
	output: {
		filename: '[name].bundle.[hash].js',
		path: path.resolve(__dirname, 'dist12')
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	plugins: [
		new CleanWebpackPlugin(['dist12']),
		new HtmlWebpackPlugin({
			title: 'HMR'
		}),
		new ManifestPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	devtool: 'inline-source-map',
})