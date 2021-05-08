const path = require('path')

module.export = {
    mode: 'development',
	entry: '.src/index.js',
	output: {
		path: path.resolve( __dirname, './dist/'),
		filename: 'bundle.js'
	},
	// devServer:{
	// 	contentBase: path.resolve( __dirname, './dist' ),
	// 	publicPath: '/assets/'
	// }
}