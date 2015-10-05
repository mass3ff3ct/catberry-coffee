'use strict';

/**
 * Module dependencies.
 */
var coffeify = require('coffeeify');

/**
 * Transformation.
 * @param {Stream} stream Incoming stream.
 * @returns {*}
 */
module.exports = function (stream) {
	return coffeify(stream);
};
