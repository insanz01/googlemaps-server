const mysql = require('mysql');

// create database connection
const conn = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'googlemaps'
});

conn.connect((err) => {
	if(err) throw err;

	console.log('Mysql is connected');
});

module.exports = conn;