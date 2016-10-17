var Webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    path = require('path'),
    buildPath = path.resolve(__dirname, 'build'),
    mainPath = path.resolve(__dirname, 'src', 'index.js');


module.exports = {
    devtool: 'eval',
    entry: mainPath,
    output: {
        path: buildPath,
        filename: 'bundle.js',
        publicPath: buildPath
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            filename: 'index.html',
            template: 'src/index.html'
        })
    ],
    module: {
        loaders: [
            {
                loaders: ['babel'],
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                loader: 'style!css',
                test: /\.css$/
            }
        ]
    }
};
