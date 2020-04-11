'use strict';

const path = require('path');

const fs = require("fs");

const environment = process.env.NODE_ENV || 'production';

const nodeLibs = {};

if (environment === 'development') {
  fs.readdirSync(path.join(__dirname, 'node_modules'))
    .filter(x => x !== '.bin')
    .forEach(mod => { nodeLibs[mod] = 'commonjs ' + mod; });
} else {
  nodeLibs['express'] = 'commonjs express';
  nodeLibs['config'] = 'commonjs config';
}

module.exports = {
  entry: {
	server: path.resolve(__dirname, 'src/app'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app-bundle.js'
  },
  target: 'node',
  mode: environment,
  node: {
    // Need this to avoid build failures when working with Express
    __dirname: false,   // otherwise, __dirname returns blank or /
    __filename: false,  // otherwise, __filename return blank or /
  },
  externals: nodeLibs,
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  plugins: [
  ]
}
