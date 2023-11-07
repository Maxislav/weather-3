"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const webpack_merge_1 = __importDefault(require("webpack-merge"));
const common = require('./webpack.config');
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
});
//# sourceMappingURL=webpack-prod.config.js.map