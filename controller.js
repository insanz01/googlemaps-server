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

// post bank data
exports.addBank = (req, res) => {

	const namaLokasi = req.body.nama_lokasi;
	const latitude = req.body.latitude;
	const longtitude = req.body.longtitude;
	const url = req.body.url;

	connection.query('INSERT INTO lokasi (nama_lokasi, latitude, longtitude, url) VALUES (?, ?, ?)', [namaLokasi, latitude, longtitude, url], (err, rows, fields) => {
		if(err) {
			console.error(err);
		} else {
			response.ok("Success add new data", res);
		}
	});
}

// update bank data
exports.updateBank = (req, res) => {
	const id = req.body.id;
	const namaLokasi = req.body.nama_lokasi
	const latitude = req.body.latitude;
	const longtitude = req.body.longtitude;
	const url = req.body.url;

	connection.query('UPDATE lokasi SET nama_lokasi=?, latitude=?, longtitude=?, url=? WHERE id=?', [namaLokasi, latitude, longtitude, url, id], (err, rows, fields) => {
		if(err) {
			console.error(err);
		} else {
			response.ok("Success update data", res);
		}
	});
}

// remove bank data
exports.deleteBank = (req, res) => {
	const id = req.body.id;

	connection.query('DELETE FROM lokasi WHERE id=?', [id], (err, rows, fields) => {
		if(err) {
			console.error(err);
		} else {
			response.ok("Success remove data", res);
		}
	});
}