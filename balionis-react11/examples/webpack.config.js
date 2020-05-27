'use strict';

const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(css|less)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    devServer: {
        host: 'localhost',
        port: 8080,
        contentBase: path.join(__dirname, 'public')
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            favicon: "./public/favicon.ico",
            filename: "./index.html"
        })
    ]
};
