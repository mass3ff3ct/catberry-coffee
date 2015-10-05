'use strict';

/**
 * Catberry CoffeeScript Browserify transformation service.
 * @type {{register: Function}}
 */
module.exports = {
	register: function (locator) {
		locator.registerInstance('browserifyTransformation', {
			transform: require('./lib/transform')
		});
	}
};
