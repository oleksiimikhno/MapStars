const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const APPDIR = 'src/';

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    watch: true,
    devServer: {
        watchFiles: ["./src/*"],
        static: './dist',
        port: 3000,
        hot: true,
    },
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
        new HtmlWebpackPlugin({
            title: "MapStars",
            filename: 'index.html',
            template: path.resolve(__dirname, APPDIR, 'index.html'),
            chunks: ['main']
        }),
        new miniCss({
            filename: './style/default.css',
        }),
        new CopyPlugin({
            patterns: [
              { from: "./src/assets", to: "assets" }
            ],
          }),
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        // publicPath: '/'
    },
    optimization: {
        runtimeChunk: 'single',
    },
}