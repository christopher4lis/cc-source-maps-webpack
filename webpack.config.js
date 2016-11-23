const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './src/app.js',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /.scss$/,
				loader: ExtractTextPlugin.extract({
					fallbackLoader: 'style',
					loader: 'css!sass'
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('style.css')
	],
	watch: true,
};