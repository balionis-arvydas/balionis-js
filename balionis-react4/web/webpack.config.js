'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, 'src/index'),
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
        }),
        new webpack.DefinePlugin({
            "process.env.REACT_APP_STAGE": JSON.stringify(process.env.REACT_APP_STAGE),
            "process.env.REACT_APP_LOG_LEVEL": JSON.stringify(process.env.REACT_APP_LOG_LEVEL),
        }),
    ]
};
