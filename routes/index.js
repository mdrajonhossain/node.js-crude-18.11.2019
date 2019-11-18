var express = require('express');

var fs = require('fs');

var path = require("path");

const getSize = require('get-folder-size');

var db = require('./../connect.js');

// console.log(dbconnect, 'KKKKKKKKKK')

 


var router = express.Router();

var util = require('util');

 

  

router.get('/', function(req, res, next) {

		const ab = util.inspect(process.memoryUsage());
		const dirfile = 'public/document/';
		const a = fs.statSync(dirfile);

  res.render('index', { ab: ab});
});



router.get('/next', function(req, res, next) {
  		
  res.render('next');
});
	

router.post('/studentinsert', function(req, res) {

var sql = "INSERT INTO student_form (name, fname, mname) VALUES ('"+req.body.name+"', '"+req.body.fname+"', '"+req.body.mname+"')";
 
db.query(sql);


res.redirect('form');

});



	

router.get('/form', function(req, res, next) {

	db.query("SELECT * from student_form", function (err, result, fields){
		 
		res.render('form', {x: result});
	});
});



router.get('/next', function(req, res, next) {
  		
  res.render('next');
});





router.get('/folder_size', function(req, res, next) {

		getSize('public/document', (err, size) => {
		if (err) { throw err; }
			// console.log(size + ' bytes');
  
  		var folderSize = (size / 1024 / 1024).toFixed(2) + ' MB';
  		var folderSize = (size / 1024 / 1024).toFixed(2);
  		// console.log(folderSize + ' MB');

 
  res.render('chart', {size:folderSize});
});
  




});
module.exports = router;
