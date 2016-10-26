'use strict';

var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    devtool: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client?reload=true',
        path.join(__dirname, 'src/index.js')
    ],
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                loader: 'babel',
                test: /\.js$/,
                exclude: /node_modules/,
                query: {
                    'presets': ['react', 'es2015']
                }
            },
            {
                loader: 'style!css',
                test: /\.css$/
            }
        ]
    }
};
