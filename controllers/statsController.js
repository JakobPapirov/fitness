const stats_index = (request, res) => {

	res.render('stats_index', { stuff: 
		{ lang: 'stats', site: 'Fitness',
		title: 'stats' }
	});
}

const stats_year = (request, res) => {

	const id = request.params.id;
	const statsSought = 'stats_' + id;

	// This serves the already created yearly diaries
	res.render( statsSought, { stuff: {
		lang: 'År', title: id }
	});
}

module.exports = {
	stats_index,
	//stats_year,
}