// Import standard packages
const express = require('express');
const mysql = require('mysql');
const router = express.Router();

// Create connection
const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'nodemysql'
});


// Connect
db.connect((err) => {
	if (err) {
		throw err;
	}
	console.log('MySQL connected..');
});

// Create DB
const stats_createdb = (request, res) => {
	res.send('Database already created!');
/*
	// DB stuff | sql syntax | DB name = nodemysql
	let sql = 'CREATE DATABASE nodemysql';
		db.query(sql, (err, result) => {
			if(err) throw err;
			//console.log(result);
			res.send(result);
		});*/
}
const stats_createpoststable = (request, res) => {

	// DB stuff | sql syntax | table name = posts
	let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY (id));';
		db.query(sql, (err, result) => {
			if(err) throw err;
			//console.log(result);
			res.send(result);
		});
}
const stats_addpost1 = (request, res) => {
// Insert post 1

	let post = { title: 'Post one', body: 'This is post one.' };

	// DB stuff | sql syntax | table name = posts
	let sql = 'INSERT INTO posts SET ?';
	let query = db.query(sql, post, (err, result) => {

		if(err) throw err;
		//console.log(result);
		res.send(result);
	})
}

const stats_addpost2 = (request, res) => {
// Insert post 2

	let post = { title: 'Post two', body: 'This is post two.' };

	// DB stuff | sql syntax | table name = posts
	let sql = 'INSERT INTO posts SET ?';
	let query = db.query(sql, post, (err, result) => {

		if(err) throw err;
		//console.log(result);
		res.send(result);
	})
}
const stats_addpost3 = (request, res) => {
// Insert post 3

	let post = { title: 'Post three', body: 'This is post three.' };

	// DB stuff | sql syntax | table name = posts
	let sql = 'INSERT INTO posts SET ?';
	let query = db.query(sql, post, (err, result) => {

		if(err) throw err;
		//console.log(result);
		res.send(result);
	})
}
const stats_getposts = (request, res) => {
// Select posts

	// DB stuff | sql syntax | table name = posts
	let sql = 'SELECT * FROM posts';
	let query = db.query(sql, (err, result) => {

		if(err) throw err;
		//console.log(result);
		res.send(result);
	})
}
const stats_getpost = (request, res) => {
// Select single post

	// DB stuff | sql syntax | table name = posts
	let sql = `SELECT * FROM posts WHERE id = ${request.params.id}`;
	let query = db.query(sql, (err, result) => {

		if(err) throw err;
		//console.log(result);
		res.send(result);
	})
}
const stats_updatepost = (request, res) => {
// Update single post

	let newTitle = 'Updated title';

	// DB stuff | sql syntax | table name = posts
	let sql = `UPDATE posts SET title = '${newTitle}' WHERE id = ${request.params.id}`;
	let query = db.query(sql, (err, result) => {

		if(err) throw err;
		//console.log(result);
		res.send(result);
	})
}
const stats_deletepost = (request, res) => {
// Delete post

	// DB stuff | sql syntax | table name = posts
	let sql = `DELETE FROM posts WHERE id = ${request.params.id}`;
	let query = db.query(sql, (err, result) => {

		if(err) throw err;
		//console.log(result);
		res.send(result);
	})
}

// Fitness data blocks
	const stats_days_worked_out_year = (request, res) => {
	// Insert fitness data worked out all years

		// Can't add multiple rows, would need a loop
		/*let fitnessData = { year: 
							[ 2011, 2012, 2013, 2014, 2015,
							2016, 2017, 2018, 2019, 2020 ],
							days_worked_out: 
							[ 67, 64, 34, 43, 43,
							27, 70, 152, 125, 120 ]
						};*/
		let fitnessData = { year: 2021, days_worked_out: 50 };

		// DB stuff | sql syntax | table name = posts
		let sql = 'INSERT INTO days_worked_out_year SET ?';
		let query = db.query(sql, fitnessData, (err, result) => {

			if(err) throw err;
			//console.log(result);
			res.send(result);
		})
	}
	
	const stats_get_days_worked_out_year = (request, res) => {
	// Select days_worked_out_year

		// DB stuff | sql syntax | table name = days_worked_out_year
		let sql = 'SELECT * FROM days_worked_out_year';
		let query = db.query(sql, (err, result) => {

			if(err) throw err;
			// result is an array of objects, one per row
			res.send(result);
		})
	}

// ! the route is relative to 'root' which for these pages is set to /db/stats/
router.get('/createdb/', stats_createdb);
router.get('/createpoststable/', stats_createpoststable);
router.get('/addpost1/', stats_addpost1);
router.get('/addpost2/', stats_addpost2);
router.get('/addpost3/', stats_addpost3);
router.get('/getposts/', stats_getposts);
router.get('/getpost/:id', stats_getpost);
router.get('/updatepost/:id', stats_updatepost);
router.get('/deletepost/:id', stats_deletepost);

router.get('/fit-years', stats_days_worked_out_year);
router.get('/fit-years-data', stats_get_days_worked_out_year);

module.exports = router;