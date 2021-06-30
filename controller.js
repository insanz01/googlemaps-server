'use strict';

const response = require('./res');
const connection = require('./connection')

exports.index = (req, res) => {
	response.ok('REST API success!', res);
};

// get all bank data
exports.getAllBank = (req, res) => {
	connection.query("SELECT * FROM lokasi", (err, rows, fields) => {
		if(err) {
			connection.log(err);
		} else {
			response.ok(rows, res);
		}
	});
};