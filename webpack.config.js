/**
 * Created by Malashta Sergey on 17.01.2017.
 * malashta@gmail.com
 * http://lexek.com
 */

var _ = require('lodash');

var _configs = {
    global: require(__dirname + '/webpack/global'),
    production: require(__dirname + '/webpack/env/production'),
    development: require(__dirname + '/webpack/env/development')
};

var _load = function (environment) {
    // detect env
    if (!environment) throw 'Can\'t find local environment variable via process.env.NODE_ENV';
    if (!_configs[environment]) throw 'Can\'t find environments see _config object';

    // load config file by environment
    return _configs && _.merge(
            _configs[environment](__dirname),
            _configs['global'](__dirname)
        );
};

/**
 * Export WebPack config
 * @type {[type]}
 */
module.exports = _load(process.env.NODE_ENV);
