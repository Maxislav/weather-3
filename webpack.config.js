"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const html_webpack_plugin_1 = __importDefault(require("html-webpack-plugin"));
const webpack = __importStar(require("webpack"));
const copy_webpack_plugin_1 = __importDefault(require("copy-webpack-plugin"));
module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        app: path_1.default.resolve(__dirname, 'src', 'index.tsx'),
        css: path_1.default.resolve(__dirname, 'src', 'index.less')
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: __dirname + '/build',
        chunkFilename: '[id].[chunkhash].js',
        clean: true
        /*path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'*/
    },
    plugins: [
        new html_webpack_plugin_1.default({
            template: path_1.default.resolve(__dirname, './src/index.html'),
            minify: false,
            base: '/'
        }),
        new webpack.ProvidePlugin({
            "React": "react",
        }),
        new copy_webpack_plugin_1.default({
            patterns: [
                {
                    from: path_1.default.resolve(__dirname, './src/assets'),
                    to: "assets",
                },
                {
                    from: path_1.default.resolve(__dirname, './src/lib/tinyscrollbar/tinyscrollbar.css'),
                    to: ""
                },
            ],
        }),
    ],
    resolve: {
        // Добавить разрешения '.ts' и '.tsx' к обрабатываемым
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            /* {
                 test: /\.svg$/,
                 loader: 'svg-inline-loader'
             },*/
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[hash]-[name].[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.txt$/,
                use: 'raw-loader'
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
            {
                test: /\.less$/i,
                // exclude: path.resolve(__dirname, './src/index.less') ,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: (path) => {
                                    if (/src[\\\/]index/.test(path)) {
                                        return 'global';
                                    }
                                    else {
                                    }
                                    return 'local';
                                },
                                localIdentName: '[name]__[local]__[hash:base64:10]'
                            },
                            sourceMap: true,
                            url: false,
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: true,
                        }
                    }
                ]
            },
            {
                test: /\.(jsx|js)$/,
                include: path_1.default.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                use: [{
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['@babel/preset-env', {
                                        "targets": "defaults"
                                    }],
                                '@babel/preset-react'
                            ],
                            plugins: [
                                [
                                    require.resolve('babel-plugin-named-asset-import'),
                                    {
                                        loaderMap: {
                                            svg: {
                                                ReactComponent: '@svgr/webpack?-prettier,-svgo![path]',
                                            },
                                        },
                                    },
                                ],
                            ],
                        }
                    }]
            }
        ]
    },
    watchOptions: {
        aggregateTimeout: 200,
        //poll: 1000,
    },
    cache: true,
    devServer: {
        hot: true,
        static: {
            directory: path_1.default.join(__dirname, 'public'),
        },
        historyApiFallback: true,
        compress: true,
        port: 9000,
    },
};
//# sourceMappingURL=webpack.config.js.map