"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const webpack_merge_1 = __importDefault(require("webpack-merge"));
const html_webpack_plugin_1 = __importDefault(require("html-webpack-plugin"));
const path_1 = __importDefault(require("path"));
const common = require('./webpack.config');
common.plugins.splice(0, 1);
module.exports = (0, webpack_merge_1.default)(common, {
    mode: 'production',
    devtool: 'inline-source-map',
    output: {
        filename: '[name].js',
        path: __dirname + '/build',
        chunkFilename: '[id].js',
        clean: true
        /*path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'*/
    },
    plugins: [
        new html_webpack_plugin_1.default({
            template: path_1.default.resolve(__dirname, './src/index.html'),
            minify: false,
            base: '/weather-3/build/'
        }),
    ]
});
//# sourceMappingURL=webpack-prod.config.js.map