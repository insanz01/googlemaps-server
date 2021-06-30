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
			console.error(err);
		} else {
			response.ok(rows, res);
		}
	});
};

// get bank data by id
exports.getBankById = (req, res) => {
	let id = req.params.id;

	connection.query(`SELECT * FROM lokasi WHERE id = ?`, [id], (err, rows, fields) => {
		if(err) {
			console.error(err);
		} else {
			response.ok(rows, res);
		}
	});
};