const stats_index = (request, res) => {

	const db = require('../components/stats/dbConnect');

	// DB stuff | sql syntax | table name = days_worked_out_year
		let sql = 'SELECT * FROM days_worked_out_year';
		let query = db.query(sql, (err, result) => {

			if(err) throw err;
			// result is an array of objects, one per row
			//res.send(result);
			res.render('../views/stats/stats_index', { stuff: 
				{ lang: 'stats',
				site: 'Fitness',
				title: 'Statistik',
				data: result }
			});
		})

}

/*
const stats_createdb = (request, res) => {

	const db = require('../components/stats/dbConnect.js');

	// Create DB
	// DB stuff | sql syntax | DB name = nodemysql
	let sql = 'CREATE DATABASE nodemysql2';
		db.query(sql, (err, result) => {
			if(err) throw err;
			console.log(result);
			res.send(result);
		});
}*/

const stats_bb_index = (request, res) => {

	res.render( '../views/stats/stats_bb_index', { stuff: 
		{ lang: 'stats',
		site: 'Fitness',
		title: 'Statistik | Skivstång' }
	});
}

const stats_db_index = (request, res) => {

	res.render( '../views/stats/stats_db_index', { stuff: 
		{ lang: 'stats',
		site: 'Fitness',
		title: 'Statistik | Hantel' }
	});
}

const stats_bw_index = (request, res) => {

	res.render( '../views/stats/stats_bw_index', { stuff: 
		{ lang: 'stats',
		site: 'Fitness',
		title: 'Statistik | Kroppsvikt' }
	});
}

const stats_swim_index = (request, res) => {

	res.render( '../views/stats/stats_swim_index', { stuff: 
		{ lang: 'stats',
		site: 'Fitness',
		title: 'Statistik | Simning' }
	});
}

const stats_run_index = (request, res) => {

	res.render( '../views/stats/stats_run_index', { stuff: 
		{ lang: 'stats',
		site: 'Fitness',
		title: 'Statistik | Löpning' }
	});
}

const stats_pwr_index = (request, res) => {

	res.render( '../views/stats/stats_pwr_index', { stuff: 
		{ lang: 'stats',
		site: 'Fitness',
		title: 'Statistik | Styrkelyft' }
	});
}

const stats_strong_index = (request, res) => {

	res.render( '../views/stats/stats_strong_index', { stuff: 
		{ lang: 'stats',
		site: 'Fitness',
		title: 'Statistik | Strongman' }
	});
}

const stats_rings_index = (request, res) => {

	res.render( '../views/stats/stats_rings_index', { stuff: 
		{ lang: 'stats',
		site: 'Fitness',
		title: 'Statistik | Ringar' }
	});
}

const stats_oly_index = (request, res) => {

	res.render( '../views/stats/stats_oly_index', { stuff: 
		{ lang: 'stats',
		site: 'Fitness',
		title: 'Statistik | Tyngdlyftning' }
	});
}

const stats_row_index = (request, res) => {

	res.render( '../views/stats/stats_row_index', { stuff: 
		{ lang: 'stats',
		site: 'Fitness',
		title: 'Statistik | Rodd' }
	});
}

const stats_terminator_index = (request, res) => {

	res.render( '../views/stats/stats_terminator_index', { stuff: 
		{ lang: 'stats',
		site: 'Fitness',
		title: 'Statistik | Maskiner' }
	});
}

/*
const stats_year = (request, res) => {

	const id = request.params.id;
	const statsSought = 'stats_' + id;

	// This serves the already created yearly diaries
	res.render( statsSought, { stuff: {
		lang: 'År', title: id }
	});
}
*/

module.exports = {
	stats_index,

	//stats_createdb,

	stats_bb_index,
	stats_terminator_index,
	stats_oly_index,
	stats_rings_index,
	stats_strong_index,
	stats_pwr_index,
	stats_run_index,
	stats_swim_index,
	stats_bw_index,
	stats_db_index,
	stats_row_index
	//stats_year,
}