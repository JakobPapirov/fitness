const goals_index = (request, res) => {

	res.render('goals_index', { stuff: 
		{ lang: 'goals', site: 'Fitness',
		title: 'goals' }
	});
}

const goals_year = (request, res) => {

	const id = request.params.id;
	const goalsSought = 'goals_' + id;

	// This serves the already created yearly diaries
	res.render( goalsSought, { stuff: {
		lang: 'År', title: id }
	});
}

module.exports = {
	goals_index,
	goals_year
}