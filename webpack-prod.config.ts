import merge from "webpack-merge";const common = require('./webpack.config');module.exports = merge(common, {    mode: 'production',    devtool: 'inline-source-map',    output: {        filename: '[name].js',        path: __dirname + '/build',        chunkFilename: '[id].js',        clean: true        /*path: path.resolve(__dirname, 'dist'),        filename: 'bundle.js'*/    },});