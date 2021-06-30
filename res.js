'use strict';

exports.ok = (data, res) => {
	res.status(200);
	res.json(data);
	res.end();
}

exports.fail = (_, res) => {
	const data = "Not Found";
	
	res.status(404);
	res.json(data);
	res.end();
}