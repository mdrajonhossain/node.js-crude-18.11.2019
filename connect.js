var mysql = require('mysql');

var con = mysql.createConnection({
	host     : 'localhost',
    database : 'rajon',
    user     : 'root',
    password : ''
});

 
module.exports = con;