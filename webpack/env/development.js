/**
 * Created by Malashta Sergey on 17.01.2017.
 * malashta@gmail.com
 * http://lexek.com
 */

/**
 * Development config
 */
var path = require('path');
var CleanPlugin = require('clean-webpack-plugin');

module.exports = function (_path) {

    return {
        devtool: 'eval',

        output: {
            path: path.join(_path, 'build'),
            filename: "[name].js"
        },

        eslint: {
            configFile: path.resolve(_path, '.eslintrc'),
            formatter: require("eslint-friendly-formatter"),
            quiet: true,
            failOnError: false,
            failOnWarning: false,
            emitError: false,
            emitWarning: true
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
                    loaders: ["babel-loader?cacheDirectory", "eslint-loader"]
                }
            ]
        },

        plugins: [

            new CleanPlugin([_path + '/public'], {root: _path})

        ]
    }
};
