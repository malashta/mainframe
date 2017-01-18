/**
 * Created by Malashta Sergey on 17.01.2017.
 * malashta@gmail.com
 * http://lexek.com
 */
/**
 * Production config
 */
var path = require('path');
var CleanPlugin = require('clean-webpack-plugin');
var webpack = require('webpack');
var strip = require('strip-loader');

module.exports = function (_path) {

    return {

        output: {
            path: path.join(_path, 'dist'),
            filename: "[name].[hash].min.js"
        },

        module: {
            loaders: [
                {
                    test: /\.js?$/,
                    loader: 'config',
                    include: [
                        path.resolve(_path, "src")
                    ]
                },
                {
                    test: /\.js?$/,
                    exclude: /node_modules/,
                    loaders: [strip.loader('debug', 'console.log'), 'babel']
                }
            ]
        },

        plugins: [
            // optimizations

            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false,
                    drop_console: true,
                    unused: true,
                    dead_code: true
                },
                output: {
                    comments: false
                }
            }),

            new CleanPlugin([_path + '/dist'], {root: _path})
        ]
    }
};
