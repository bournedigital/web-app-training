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
				exclude: /(node_modules)/,
				loader: 'babel-loader'
			},
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader'
			},
			{ 
				test: /\.(png|jpg|svg|gif)$/,
				loader: 'url-loader?limit=8192'
			}
		]
	}
}