// Import webpack moduke
var webpack = require("webpack");
// Import open browser plugin
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
//Import path module
const path = require('path');

var StringReplacePlugin = require("string-replace-webpack-plugin");

module.exports = {
    resolve: {
		alias: {
			fs: 'pdfkit/js/virtual-fs.js'
		}
  },
    entry: "./src/index.js", //set entry file
    // Resolve to output directory and set file
    output: {
        path: path.resolve("dist/assets"),
        filename: "bundle.js",
        publicPath: "assets"
    },

    // Add Url param to open browser plugin
    plugins: [new OpenBrowserPlugin({url: 'http://localhost:3000'})],
    
	plugins: [new StringReplacePlugin()],
    // Set dev-server configuration
    devServer: {
        inline: true,
        contentBase: './dist',
        port: 3000
    },

    // Add babel-loader to transpile js and jsx files
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            presets: ["react"]
                        }
                    }
                ]
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.svg$/,
                use: ['svg-inline-loader']
            } 
            
        ]
    }
}