'use strict';

module.exports = (app) => {
	let myApp = require('./controller');

	app.route('/')
		.get(myApp.index);

	app.route('/banks')
		.get(myApp.getAllBank);

	app.route('/bank/:id')
		.get(myApp.getBankById);
}