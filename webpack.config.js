const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	mode: 'development',
	plugins: [new htmlWebpackPlugin({template: './src/index.html'})],
	devServer: {
		 static: {
			 directory: path.join('./dist')
		 },
		watchFiles: ['./src/**'],
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
		],
	},
}
