const path = require('path');

/**
 * 默认入口是src/1-assetManagement/index.js
 * 默认出口是dist/bundle.js
 * @type {{entry: string, output: {filename: string, path: (*|*|string)}}}
 */
module.exports = {
	entry: './src/1-assetManagement/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist1')
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
					{
						loader: 'image-webpack-loader', // 图片压缩
						options: {
							mozjpeg: {
								progressive: true,
								quality: 65
							},
							// optipng.enabled: false will disable optipng
							optipng: {
								enabled: false,
							},
							pngquant: {
								quality: '65-90',
								speed: 4
							},
							gifsicle: {
								interlaced: false,
							},
							// the webp option will enable WEBP
							webp: {
								quality: 75
							}
						},
					},
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					'file-loader'
				]
			}
		]
	}
}