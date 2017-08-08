module.exports = {
	entry: './src/index.js',
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js'
	},
	devServer: {
		inline: true,
		contentBase: __dirname + '/public',
		port: 3030
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader'
			}
		]
	}
}