const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    watch: true,
    devServer: {
        watchFiles: ["./src/*"],
        static: './dist',
        port: 3000,
        hot: true,
    },
});