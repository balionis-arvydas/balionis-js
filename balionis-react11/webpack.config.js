"use strict";

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const pkg = require("./package.json");

const libraryName = pkg.name;

module.exports = {
    entry: path.resolve(__dirname, "src/index.js"),
    output: {
        path: path.join(__dirname, "./dist"),
        filename: 'index.js',
        chunkFilename: '[id].js',
        library: libraryName,
        libraryTarget: "umd",
        publicPath: "/dist/",
        umdNamedDefine: true
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'index.css'
        })
    ],
    node: {
        net: 'empty',
        tls: 'empty',
        dns: 'empty'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ["babel-loader"],
                exclude: /node_modules/,
                include: path.resolve(__dirname, "src")
            },
            {
                test: /\.(css|less)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                    'sass-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            fallback: "file-loader",
                            name: "[name][md5:hash].[ext]",
                            outputPath: 'assets/',
                            publicPath: '/assets/'
                        }
                    }
                ]
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: ["file-loader"]
            },
            {
                test: /\.(pdf|doc|zip)$/,
                use: ["file-loader"]
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
            'react': path.resolve(__dirname, './node_modules/react'),
            'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
            'assets': path.resolve(__dirname, 'assets')
        }
    },
    externals: {
        "react": {
            commonjs: "react",
            commonjs2: "react",
            amd: "React",
            root: "React"
        },
        "react-dom": {
            commonjs: "react-dom",
            commonjs2: "react-dom",
            amd: "ReactDOM",
            root: "ReactDOM"
        }
    }
};
