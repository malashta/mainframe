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
            path: path.join(_path, '/client/vendor'),
            filename: "mainframe.js"
        },

        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel',
                    exclude: ['node_modules']
                }
            ]
        },

        plugins: [
            new CleanPlugin([_path + '/build', _path + '/client/vendor'], {root: _path})
        ],
        watch: true,
        watchOptions: {
            aggregateTimeout: 100
        }
    }
};
