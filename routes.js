'use strict';

module.exports = (app) => {
	let myJson = require('./controller');

	app.route('/')
		.get(myJson.index);

	app.route('/bank')
		.get(myJson.getAllBank);
}