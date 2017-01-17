/**
 * Created by Malashta Sergey on 17.01.2017.
 * malashta@gmail.com
 * http://lexek.com
 */

module.exports = function (_path) {
    return {

        entry: {
            application: _path + '/src/index.js'
        },

        resolve: {
            modulesDirectories: ['node_modules'],
            extensions: ['', '.js']
        },

        resolveLoader: {
            modulesDirectories: ['node_modules'],
            extensions: ['', '.js']
        }
    };
};
