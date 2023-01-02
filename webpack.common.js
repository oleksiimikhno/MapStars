const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const APPDIR = 'src/';

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [{
            test:/\.(s*)css$/,
            use: [
               miniCss.loader,
               'css-loader',
               'sass-loader',
            ]
        }],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
              { from: "./src/assets", to: "assets" }
            ],
        }),
        new HtmlWebpackPlugin({
            title: "MapStars",
            filename: 'index.html',
            template: path.resolve(__dirname, APPDIR, 'index.html'),
            chunks: ['main']
        }),
        new miniCss({
            filename: './style/default.css',
        }),
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../'),
        clean: true,
        // publicPath: '/'
    },
    optimization: {
        runtimeChunk: 'single',
    },
    stats: {
        errorDetails: true,
    },
}