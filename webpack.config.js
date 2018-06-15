'use strict';

const path = require('path');
const fs = require('fs');
const _ = require('lodash');
const yaml = require('js-yaml');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DotenvPlugin = require('webpack-dotenv-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const packageData = require('./package.json');

const isProduction = process.env.NODE_ENV === 'production';
const isDev = !isProduction;
const libraryName = 'portfolio';

const yamlPath = path.resolve('app.yml');
const yamlConfig = yaml.load(fs.readFileSync(yamlPath, 'utf8'));

module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    target: 'web',
    entry: _.extend({
        index: './src/index.js',
        vendor: [
            'react',
            'react-dom'
		]
    },
    isDev && {
        hotLoader: 'webpack-hot-middleware/client'
    }),
    context: __dirname,
    devtool: 'source-map',
    node: {
        __filename: true,
        __dirname: true,
        fs: 'empty'
    },
    output: {
        publicPath: isProduction ? '/' : '/public/',
        path: path.resolve('public'),
        filename: '[name].js',
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, './node_modules')
        ],
        extensions: ['.js', '.jsx', '.css', '.scss', '.ts', '.tsx'],
        alias: {
            '~': path.resolve(__dirname, 'src'),
            'assets': path.resolve(__dirname, 'assets')
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: _.compact([ isDev && 'react-hot-loader', 'babel-loader'])
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.css$/,
                use: [
                    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.(jpg|png|ico|eot|ttf|woff|woff2|otf|xml)$/,
                use: {
                    loader: 'file-loader?name=[name].[ext]'
                }
            },
            {
                test: /\.s?[ac]ss$/,
                use: [
                    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    },
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /(\.svg)$/,
                use: {
                    loader: 'svg-inline-loader'
                }
            }
        ]
    },
    plugins: _.compact([
        isProduction && new CleanWebpackPlugin(['public']),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            PROJECT_ROOT: path.join('"', __dirname, '"'),
            'typeof window': JSON.stringify('object'),
            CONFIG: JSON.stringify(yamlConfig),
            VERSION: JSON.stringify(packageData.version)
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'template.html'),
            chunks: ['index', 'vendor', 'hotLoader', 'common'],
            excludeChunks: [],
            chunksSortMode: 'dependency'
        }),
        new DotenvPlugin({
          sample: './.env',
          path: './.env'
        }),
        isProduction && new UglifyJSPlugin({
            sourceMap: true
        }),
        isDev && new webpack.HotModuleReplacementPlugin()
    ]),
    optimization: {
        minimize: isProduction
    }
};
