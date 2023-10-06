const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require("webpack");

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'out/js/send-request.js'),
    },
    module: {
        rules: []
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new webpack.EnvironmentPlugin({
            'NODE_ENV': 'production'
        })
    ]
}