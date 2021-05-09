const path = require('path');

	module.exports = {
	mode: 'development',
	entry: './src/apps.js',
	output: {
		path: path.resolve( __dirname, './dist/asset' ),
	},
    
}