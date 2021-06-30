'use strict';

const response = require('./res');
const connection = require('./connection')

exports.index = (req, res) => {
	response.ok('Aplikasi REST API ku berjalan!');
};